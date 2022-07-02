def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um
    #  iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for i in strings:
        final_string += i
        if not i == len(strings):  # strings[-1] === len(strings)
            final_string += ', '
    print(final_string)


# pode ser chamado com 2 parâmetros
concat("Carlos", "Cristina", "Duda", "Rafa")  # saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "Cristina", "Maria")  # saída: "Carlos, Cristina, Maria"

# dict é uma função que já vem embutida no python
dict(nome="Felipe", sobrenome="Silva", idade=25)  # cria um dicionário
# utilizando as chaves passadas

print(dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))
# o número de parâmetros passados para a função pode variar

len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

# len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Coin", "Rodrigo", "->")  # imprime Coin Rodrigo ,

print("Coin", "Rodrigo", "Duda", "Rafa", sep=" -> ")
# nomeando o terceiro parâmetro, agora
