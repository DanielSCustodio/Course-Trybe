"""Dada uma lista de número, retorn eo número mais frequente"""


from unittest import result


def most_frequent_number(numbers):
    # map_counter =  dict.fromkeys(numbers, 0) # Cria um dicionário, sem repetições, as chaves são os valores de numbers e o valor inicial é 0
    map_counter = dict()

    for num in numbers:
        map_counter[num] = 0

    for num in numbers:
        map_counter[num] += 1

    max_value = 0
    max_key = None

    for key, value in map_counter.items():
        if value > max_value:
            max_value = value
            max_key = key
    return max_key



def test_most_frequent_number():
    test1 = [0, 0, -1, 3, 5, 1, 1, 5, 2, 0, 8, 1, -2, 0, 1]
    assert most_frequent_number(test1) in [0, 1]

    test2 = [5, 5, 5, 2, 2, 3, 3, 3, 3, 10, 10, 10, 10, 10, 10]
    assert most_frequent_number(test2) == 10


print(most_frequent_number([5, 5, 5, 2, 2, 3, 3, 3, 3, 10, 10, 10, 10, 10, 10]))