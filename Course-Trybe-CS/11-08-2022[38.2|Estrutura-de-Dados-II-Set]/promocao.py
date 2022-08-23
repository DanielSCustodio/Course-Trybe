# retornar um dict com a relação de pessoa: amigos
friends = [
    ("Cris", "Carol"),
    ("Fer", "Cris"),
    ("Carol", "Carlos"),
]


def promotion(friends):
    people = {}
    for a, b in friends:
        if a not in people:
            people[a] = set()
        if b not in people:
            people[b] = set()

        people[a].add(b)
        people[b].add(a)
    return people


print(promotion(friends))
