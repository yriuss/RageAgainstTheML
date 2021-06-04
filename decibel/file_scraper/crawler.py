import requests

link_list = ["https://www.ultimate-guitar.com/search.php?search_type=title&value="]


def exctract_links(site_code):
    output_links = []
    stop = 0
    found_idx = site_code.find("https://tabs.ultimate-guitar.com/tab/")
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
    if site_code:
        output_links = exctract_links(site_code.text)
    else:
        print("Response Failed")
    return output_links


#code_txt = teste.partition('&')
#print(code_txt[2])

