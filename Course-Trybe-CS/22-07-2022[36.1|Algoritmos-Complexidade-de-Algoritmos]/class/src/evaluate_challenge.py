from challenge import check_sum
from timeit import timeit
import random

def main():
    print("Gerando entrada pequena")
    numbers = random.sample(range(1, 10000), 1000) # terceiro agumento é o tamanho do array gerado
    numbers.sort()
    target = random.randint(1000, 10000)
    print("Iniciando entrada pequena")
    print(
      ">>> tempo entrada pequena: "
      + str(timeit(lambda: check_sum(numbers, target), number=1))
    )

    print("Gerando entrada GRANDE")
    numbers = random.sample(range(1, 100000000), 10000000) # terceiro agumento é o tamanho do array gerado
    numbers.sort()
    target = random.randint(1000, 1000000)
    print("Iniciando entrada GRANDE")
    print(
      ">>> tempo entrada grande: "
      + str(timeit(lambda:check_sum(numbers, target), number=1))
    )


main()