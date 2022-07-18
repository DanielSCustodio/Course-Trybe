import requests
import time

for _ in range(15):
    response = requests.get("https://www.amazon.com.br/")
    print(response.status_code)
    time.sleep(2)