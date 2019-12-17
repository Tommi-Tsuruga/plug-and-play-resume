import requests
from urllib import request, response, error, parse
from urllib.request import urlopen
from bs4 import BeautifulSoup

"""
url = 'https://www.builtinnyc.com/job/engineer/devops-engineer/49422?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'
html = urlopen(url)
soup = BeautifulSoup(html, "lxml")
# here, the "lxml" is the html parser

#title = soup.title
#titleText = title.get_text()
#print(titleText)


section = soup.find_all('section', class_='facts-categories')
for elem in section:
    wrappers = elem.find_all('div')
    for x in wrappers:
        title = x.find('h5').get_text()
        print(title)
        detail = x.find_all('ul')
        for row in detail:
            for l in row.find_all('li'):
                text = l.find('p').get_text()
                value = l.find('span', class_ = 'value').get_text()
                print (text + value)
            print('----------')


soup = BeautifulSoup(page.content, 'html.parser')
soup.find_all('p')[0].get_text()

"""


#page = requests.get('https://www.builtinnyc.com/job/engineer/devops-engineer/49422?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic')









import requests
from bs4 import BeautifulSoup

url = 'https://www.dropbox.com/jobs/listing/1073981?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'
res = requests.get(url)
html_page = res.content
soup = BeautifulSoup(html_page, 'html.parser')
text = soup.find_all(text=True)

output = ''

blacklist = [
	'[document]',
	'noscript',
	'header',
	'html',
	'meta',
	'head',
	'input',
	'script',

]

whitelist = [
  'p'
]

for t in text:
    if (t.parent.name not in blacklist) or (t.parent.name in whitelist):
        output += '{} '.format(t)

print(output)
