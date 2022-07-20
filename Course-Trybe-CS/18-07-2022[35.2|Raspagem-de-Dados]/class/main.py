from fastapi import FastAPI
from quotes_scraper import scrape_all_quotes

app = FastAPI()

all_quotes = scrape_all_quotes()

@app.get("/")
def get_quotes():
    return all_quotes