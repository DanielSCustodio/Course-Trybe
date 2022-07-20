import requests
import time
from parsel import Selector

def fetch_html(url):
    time.sleep(1)
    try:
        res = requests.get(url)
        res.raise_for_status()
    except TimeoutError:
        return "Erro no tempo de requisição"
    except requests.HTTPError:
        return "Erro na requisiçaõ"
    return res.text


def parse_quotes_html(html_content):
    result = []
    selector = Selector(html_content)
    for container in selector.css("div.col-md-8 > div.quote"):
        content = container.css("span.text ::text").get()
        author = container.css("span small.author ::text").get()
        tags = container.css("div.tags a.tag ::text").getall()
        quote_dict = {"content":content, "author": author, "tags":tags}
        result.append(quote_dict)
    return result


def parse_next_url(html_content):
    selector = Selector(html_content)
    return selector.css("ul.pager li.next a ::attr(href)").get()
    

def scrape_all_quotes():  
    base_url = "https://quotes.toscrape.com"
    next_url_path = "/"

    quotes_data = []
    while next_url_path:
        quotes_html = fetch_html(base_url + next_url_path)
        quotes_data.extend(parse_quotes_html(quotes_html))
        next_url_path = parse_next_url(quotes_html)

    return quotes_data
