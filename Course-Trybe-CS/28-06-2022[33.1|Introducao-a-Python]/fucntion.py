person = {"weight": 85, "height": 180}


def imc(weight, height):
    result = weight / (height/100) ** 2
    print(result)


imc(85, 180)
imc(height=person["height"], weight=person["weight"])
