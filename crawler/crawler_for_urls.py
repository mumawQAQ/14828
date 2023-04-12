import requests
from bs4 import BeautifulSoup

url = "https://greasyfork.org/en/scripts?page="
page = 1
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/112.0.0.0 Safari/537.36 "
}

while True:
    r = requests.get(url + str(page), headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")
    scripts = soup.find_all("a", {"class": "script-link"})
    if len(scripts) == 0:
        break
    for script in scripts:
        print(script.get("href"))
        with open("scripts.txt", "a") as f:
            f.write(script.get("href") + "\n")
    page += 1
    if page > 20:
        break
