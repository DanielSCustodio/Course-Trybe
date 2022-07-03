import random

random_number = random.randint(1,10)
guess = ""

while guess != random_number:
    guess = int(input("Escolha um número entre 1 e 10: "))
    if guess == random_number:
        print("Acertou")
    else: print ("Desiste")

import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)