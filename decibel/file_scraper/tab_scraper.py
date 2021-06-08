"""
This module contains all the methods you need for scraping either a single tab file or a predefined set of tab files
from the Internet.
"""

from decibel.import_export.filehandler import TABS_FOLDER, MUSIC_INPUT
from os import path
import requests
import re
from decibel.file_scraper.crawler import crawler
from os import path, listdir

def music_input():
    """
    Prepare .mp3 input for estimation
    """
    result = []
    music_name = []
    all_tab_names = []
    for mp3_file in listdir(MUSIC_INPUT):
        if mp3_file.endswith(".mp3"):
            mp3_name = mp3_file.replace(".mp3","")
            music_name.append(mp3_name)
            result.append(mp3_name)
            links = crawler(mp3_name)
            tab_names = []
            for i in range(len(links)):
                tab_names.append(download_tab(links[i],mp3_name))
            all_tab_names.append(tab_names)
    return result, all_tab_names

def download_data_set_from_csv(csv_path: str, tab_directory: str):
    """
    Download a data set of tab files, as specified by the csv file in csv_path, and put them into tab_directory.
    If a tab file cannot be downloaded successfully, for example because the file already existed or because the
    Internet connection broke down, then the function continues with downloading the other tab files. After trying to
    download all prescribed tab files, this function returns a message indicating the number of tab files that were
    downloaded successfully and the number of tab files for which the download failed.

    :param csv_path: Path to the csv file with lines in format [url];[name];[key];[filename] (for example IndexTabs.csv)
    :param tab_directory: Local location for the downloaded files
    """
    nr_successful = 0
    nr_unsuccessful = 0

    # Open the csv file
    with open(csv_path, 'r') as read_file:
        csv_content = read_file.readlines()
    for line in csv_content:
        parts = line.rstrip().split(';')
        tab_url = parts[0]
        tab_name = parts[3]
        success, message = download_tab(tab_url, tab_directory, tab_name)
        if success:
            nr_successful += 1
        else:
            nr_unsuccessful += 1
            if message:
                print(message)

    print(str(nr_successful) + ' tab files were downloaded successfully. ' + str(nr_unsuccessful) + ' failed.')

def get_cifra_club_content(tab_url):
    site_code = requests.get(tab_url)
    beginning = "<pre>"
    end = "</pre>"
    start_index = site_code.text.find(beginning)
    end_idx = site_code.text.find(end)
    content = site_code.text[start_index+5:end_idx]
    filtered_content = content.replace("[tab]","").replace("[/tab]","").replace("[ch]","").replace("[/ch]","").replace("\\n","\n").replace("\\r","\r").replace("<b>","").replace("</b>","")
    
    return filtered_content

def download_tab(tab_url,mp3_name):
    if(type(tab_url) != str):
        tab_url = str(tab_url[0])
    #print(tab_url)
    site_code = requests.get(tab_url)
    last_slash_idx = tab_url.rfind('/')
    tab_name = tab_url[last_slash_idx + 1:]
    if tab_name == "":
        last_slash_idx = tab_url[0:len(tab_url) - 1].rfind('/')
        tab_name = tab_url[last_slash_idx + 1:len(tab_url) - 1]
    beginning = "content&quot;:&quot;"
    end = "&quot;"
    start_index = site_code.text.find(beginning) + len(beginning) + 1
    start_index = site_code.text[start_index:].find("[Intro]") + start_index
    end_index = site_code.text[start_index:].find(end) + start_index
    content = site_code.text[start_index:end_index]
    filtered_content = content.replace("[tab]","").replace("[/tab]","").replace("[ch]","").replace("[/ch]","").replace("\\n","\n").replace("\\r","\r")
    if(filtered_content == ""):
        filtered_content = get_cifra_club_content(tab_url)
    if( not path.isfile(path.join(TABS_FOLDER,mp3_name+".txt"))):
        with open(path.join(TABS_FOLDER,mp3_name+".txt"), 'w') as f:
                f.write(filtered_content)
    return mp3_name