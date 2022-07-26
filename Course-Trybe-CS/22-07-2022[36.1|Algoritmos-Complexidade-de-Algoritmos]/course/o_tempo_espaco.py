def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares

#  Tempo de execução e saída são dependentes da entrada
#  Complexidade de Tempo dada por O(n)
#  Complexidade de Espaço é dada por O(1).


def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result

#  Tempo de execução depende da entrada, mas a saída é um constante, um número só
#  Complexidade de Tempo dada por O(n)
#  Complexidade de Espaço é dada por O(1).
