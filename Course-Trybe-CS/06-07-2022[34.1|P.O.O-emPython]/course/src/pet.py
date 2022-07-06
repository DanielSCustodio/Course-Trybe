class Pet():
    def __init__(self, nome, especie, idade, humano):
        self.nome = nome
        self.especie = especie
        self.idade = idade
        self.humano = humano

    def __str__(self):
        return f""" 
        - Espécide do Pet: {self.especie}
        - Nome do Pet: {self.nome}
        - Idade do Pet(em meses): {self.idade}
        - Responsável pelo Pet: {self.humano}
        """


Frederico = Pet("Fred", "Gato", 4, "Daniel") #criação de uma instância

print(Frederico)
