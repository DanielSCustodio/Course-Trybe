"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys

class Array:
    def __init__(self):
        self.data = []

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)


# vamos inicializar e preencher uma estrutura de dados array
array = Array()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")
array.set(0, "Marcos")
array.set(1, "Patrícia")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
# enquanto há elementos no array

index = 0
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1


print("____________________")
array.remove(0)  #Remove Marcos
index = 0
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
array_memory_size = sys.getsizeof(array.data)

print("Tamanho do array:",array_memory_size)