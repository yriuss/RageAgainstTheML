import requests

link_list = ["https://www.ultimate-guitar.com/search.php?search_type=title&value=","https://www.google.com/search?q="]


def exctract_links(site_code, link_idx):
    output_links = []
    stop = 0
    if link_idx == 0:
        found_idx = site_code.find("https://tabs.ultimate-guitar.com/tab/")
    else:
        found_idx = site_code.find("cifraclub.com.br")
        site_url_filtered = site_code[found_idx-12:].partition('&')[0]
        site_url_filtered = site_url_filtered.partition('=')[2]
        return site_url_filtered
        
    while(found_idx != -1):
        exctracted_link = site_code[found_idx:].partition('&')[0]
        
        if (exctracted_link.find("-chords-")!=-1) and stop < 2:
            stop += 1
            output_links.append(exctracted_link)
            
        site_code = site_code[found_idx:].partition('&')[2]
              
        
        #print(exctracted_link)
        found_idx = site_code.find("https://tabs.ultimate-guitar.com/tab/")
    return output_links

def crawler(file_name):
    output_links = []
    site_code = requests.get(link_list[0] + file_name)
    output_links.append(exctract_links(site_code.text, 0))

    site_code = requests.get(link_list[1] + file_name + "Cifra Club")
    output_links.append(exctract_links(site_code.text, 1))
    return [x for x in output_links if x]#output_links


#code_txt = teste.partition('&')
#print(code_txt[2])