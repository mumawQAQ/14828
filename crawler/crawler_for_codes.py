import requests
from bs4 import BeautifulSoup

counter = 0
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/112.0.0.0 Safari/537.36 "
}
with open("scripts.txt", "r") as f:
    scripts = f.read().splitlines()
    for script_page in scripts:
        r = requests.get(script_page + "/code", headers=headers)
        soup = BeautifulSoup(r.text, "html.parser")
        script_code = soup.find("div", {"class": "code-container"})
        if script_code is not None:
            script_code = script_code.find("pre").text
            with open("greasyfork_scripts/" + str(counter) + ".js", "w") as f1:
                f1.write(script_code)
            counter += 1
            print(counter)
        else:
            print("No code found for " + script_page)