class Node():
    def __init__(self, value):
        self.value = value
        self.next = None
    
    def __str__(self): # use o print(nome_do_objeto) para obter o retorno abaixo
        return f"Node(value => {self.value}, next => {self.next})"