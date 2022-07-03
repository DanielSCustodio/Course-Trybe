import json


import json

def import_data():
    FILE_PATH = 'data/video_games.json'

    try:
        with open(FILE_PATH) as list_videogames:
            return json.load(list_videogames)
    except FileNotFoundError:
        raise FileNotFoundError("Arquivo não encontrado")
    except Exception:
        raise FileNotFoundError("Pode ter dado qualquer merda, se vira")