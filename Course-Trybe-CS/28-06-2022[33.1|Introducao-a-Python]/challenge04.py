def challenge04():
    list_two = ['dois', 'two', 'dos', 2022]
    tupla_two = (list_two)
    for item in tupla_two:
        print(len(item))


def challenge_work():
    list_two = ['dois', 'two', 'dos', 2022]
    tupla_two = (list_two)
    for item in tupla_two:
        print(len(str(item)))  # tranformando em string


# not work challenge04()
challenge_work()
