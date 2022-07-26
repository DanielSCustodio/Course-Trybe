# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1
    op = 0;

    while start <= end: # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        op += 1
        mid = (start + end) // 2 # encontro o meio

        if numbers[mid] == target: # se o elemento do meio for o alvo, devolve a posição do meio
            print(f"Operações: {op}")
            return mid

        if target < numbers[mid]: # se o elemento for menor, atualiza o índíce do fim
            end = mid - 1
        else: # caso contrário, atualiza o índíce do inicio
            start = mid + 1

    return -1 # Não encontrou? Retorna -1
# complexidade desse algoritmo é dada por O(log n).



numbers = [2, 3, 4, 10, 40, 85, 95, 100, 152, 224]
target = 95

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")