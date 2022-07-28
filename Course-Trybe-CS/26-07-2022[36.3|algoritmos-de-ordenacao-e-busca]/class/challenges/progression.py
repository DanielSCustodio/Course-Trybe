"""
Dada uma lista de inteiros desordenados
- retorne True se for possível construir uma progressão uniforme
- retorne False caso contrário"""

from .sorters.merge import merge_sort

# O(N * log N)


def has_progression(input_list: list): 
    sorted_list = merge_sort(input_list) # Passo 1: Ordena

    diff = sorted_list[0] - sorted_list[1] # - numero negativo

    for i, _ in enumerate(sorted_list[:-1]): # lista ordenada mesmo ultimo numero // Passo 2: Verifica a progressão uniforme
        if diff != sorted_list[i] - sorted_list[i+1]: 
            # [:-1] último número não é comparado, porém a comparação do penúltimo com ele é o suficiente pra ter a diferença
            return False
    return True



def smart_has_progression(input_list): #Verifca a progressão uniforme durante a ordenação
    diff = None
    print("Inicio =>",input_list)
    for i in range(len(input_list)):
        print("Value I==========>",input_list[i])
        min_i = i # i =  item atual

        for j in range(i + 1, len(input_list)): # j = próximos itens depois de i
            print("Value J",input_list[j])
            if input_list[j] < input_list[min_i]:
                min_i = j
                print("Achou!!!! Menor é ==>", input_list[min_i])

        input_list[min_i], input_list[i] = input_list[i], input_list[min_i] 
        # o i atual(que é o primeiro da lista) troca de posição com o menor da lista
        print("Fim =>",input_list)

        if i >= 1:
            if diff is None:
                diff = input_list[i] - input_list[i-1]
            elif diff != input_list[i] - input_list[i-1]:
                return False
    return True


def test_has_progression():
    assert smart_has_progression([1, 3, 5]) is True
    assert smart_has_progression([3, 6, 1]) is False
    assert smart_has_progression([7, 43, 19, 25, 1, 31, 37, 13]) is True
    assert smart_has_progression([7, 43, 19, 25, 2, 32, 37, 13]) is False
    assert smart_has_progression([1, 2]) is True


print(smart_has_progression([7, 43, 19, 25, 1, 31, 37, 13]))