from random import randint

dice_roll = randint(1, 20)

if dice_roll == 1:
    print("O horror, o horror!")
elif 2 <= dice_roll <= 15:
    print("Ahadarak, por que me atormentas?")
elif 16 <= dice_roll <= 19:
    print("Nimb, obrigado pela sorte")
else:
    print("Uhulllllllll")

print(dice_roll)