import csv

with open("dc-wikia-data.csv") as superheroes_file:
    header, *superheroes_list = csv.reader(superheroes_file)
    print(header)
    for superhero in superheroes_list:
        print(superhero[1])