def reverse(input_list):
    if len(input_list) <=1:
        print(input_list)
        return input_list
    else:
        print(input_list)
        return [input_list[-1]] + reverse(input_list[:-1])

        # input_list[-1] = pega o ultimo elemento a cada ciclo e coloca no array
        # reverse(input_list[:-1] = chama o restante da lista para passar pelo processo anterior, mas sem o item que foi colocado no array
        # o retono não é alista original passada como parâmetro

reverse([1,2,3,5])