# verificar a quantidade de pessoais

friends = [
    ("Cris", "Carlos"),
    ("Fer", "Cris"),
    ("Bux", "Tulio"),
    ("Carol", "Carlos"),
]


def team_members(friends):
    unique_friends = set()
    for a,b in friends:
        # a, b = duo
        unique_friends.add(a)
        unique_friends.add(b)
    return len(unique_friends)


print(team_members(friends))
