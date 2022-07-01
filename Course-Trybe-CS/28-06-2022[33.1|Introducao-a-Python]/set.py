# conjuntos

permissions = {"Daniel", "Flávia"}  # elementos separados por vírgula,
# envolvidos por chaves
user = {"Daniel", "Israel", "Flávia"}

permissions.add("Fulano")  # adiciona um novo elemento ao conjunto

permissions.add("Daniel")  # como o elemento já existe, nenhum novo item é
# adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união #

permissions.intersection({"user", "member"})  # retorna um conjunto resultante
# da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
all = permissions.union(user)
print(all)
