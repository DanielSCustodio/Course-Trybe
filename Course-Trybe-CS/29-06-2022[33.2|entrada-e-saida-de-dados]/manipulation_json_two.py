import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as list_pokemons:
    content = list_pokemons.read()  # leitura do arquivo
    list_pokemons = json.loads(content)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

# print(pokemons[0])  # imprime o primeiro pokemon da lista



with open("pokemons.json") as list_pokemons:
    list_pokemons = json.load(list_pokemons)["results"]

grass_type_pokemons_name = [
    pokemon["name"] for pokemon in list_pokemons if "Grass" in pokemon["type"]
]

grass_type_pokemons = [
    pokemon for pokemon in list_pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as list_pokemons:
    json_to_write = json.dumps(
        grass_type_pokemons_name
    )  # conversão de Python para o formato json (str)
    list_pokemons.write(json_to_write)


# abre o arquivo para escrita
with open("grass_pokemons_two.json", "w") as list_pokemons:
    # escreve no arquivo já transformando em formato json a estrutura
    json.dump(grass_type_pokemons, list_pokemons)
