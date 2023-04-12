import os
import re


# read all files in a directory
def read_files(directory):
    files = []
    for file in os.listdir(directory):
        if file.endswith(".js"):
            with open(directory + "/" + file, "r") as f:
                files.append(f.read())
    return files


def get_header_comments(files):
    header_comments = []
    for file in files:
        header_comments.append(re.findall(r"\/\/ ==UserScript==[\S\s]+?\/\/ ==\/UserScript==", file))
    return header_comments


files = read_files("greasyfork_scripts")
header_comments = get_header_comments(files)
match_star_counter = 0
match_http_star_counter = 0
match_https_counter = 0
match_http_counter = 0
grant_unsafeWindow_counter = 0
connect_star_counter = 0
total = 0

for header_comment in header_comments:
    if len(header_comment) > 0:
        total += 1
        header_comment = header_comment[0]
        if re.search(r"\/\/( )*@match( )*\*:\/\/\*\/\*", header_comment, re.IGNORECASE):
            match_star_counter += 1
        if re.search(r"\/\/( )*@match( )*http\*:\/\/\*\/\*", header_comment, re.IGNORECASE):
            match_http_star_counter += 1
        if re.search(r"\/\/( )*@match( )*https:\/\/\*\/\*", header_comment, re.IGNORECASE):
            match_https_counter += 1
        if re.search(r"\/\/( )*@match( )*http:\/\/\*\/\*", header_comment, re.IGNORECASE):
            match_http_counter += 1
        if re.search(r"\/\/( )*@grant( )+unsafeWindow", header_comment, re.IGNORECASE):
            grant_unsafeWindow_counter += 1
        if re.search(r"\/\/( )*@connect( )+\*", header_comment, re.IGNORECASE):
            connect_star_counter += 1

print("match_star_counter: " + str(match_star_counter))
print("match_http_star_counter: " + str(match_http_star_counter))
print("match_https_counter: " + str(match_https_counter))
print("match_http_counter: " + str(match_http_counter))
print("grant_unsafeWindow_counter: " + str(grant_unsafeWindow_counter))
print("connect_star_counter: " + str(connect_star_counter))
print("total: " + str(total))