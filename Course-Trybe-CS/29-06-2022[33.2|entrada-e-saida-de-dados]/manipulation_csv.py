import csv

with open("dc-wikia-data.csv", mode="r") as superheroes_list:
    superheroes_list = csv.DictReader(superheroes_list)
    for hero in superheroes_list:
        if hero["SEX"] != "Female Characters" and hero["SEX"] != "Male Characters":
            print(f'Nome: {hero["name"]} - Sexo: {hero["SEX"]}')