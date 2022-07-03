import json

with open("superheroes.json") as superheroes_file:
    print(json.load(superheroes_file)[0]["alter_ego"])

with open("superheroes.json") as superheroes_file:
    superheroes_list = json.load(superheroes_file)
    for superhero in superheroes_list:
        print(superhero["alter_ego"])