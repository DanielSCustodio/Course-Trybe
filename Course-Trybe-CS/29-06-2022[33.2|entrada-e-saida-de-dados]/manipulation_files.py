characters_file = open("lista_pessoas.txt", mode="w")

characters_file.write("Daniel\n")
characters_file.write("Israel\n")
characters_file.write("Flávia\n")

print("Fulano", file=characters_file) # Print esvreve no arquivo, não precisa quebrar linha
more_characters = ["Ciclano\n", "Beltrano"]
characters_file.writelines(more_characters) # adiciona a lista ao arquivo
characters_file.close()


# leitura
characters_file_read = open("lista_pessoas.txt", mode="r")
content = characters_file_read.read()
print(content)
characters_file_read.close()
