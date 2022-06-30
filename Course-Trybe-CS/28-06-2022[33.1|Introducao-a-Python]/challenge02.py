def challenge_02():
    number_one = "1"
    my_dict = {number_one: ["um", "one", "uno"]}  # dicionario, parecido c obj
    if number_one in my_dict:
        print(my_dict[1])


def challenge_work():
    number_one = "1"
    my_dict = {number_one: ["um", "one", "uno"]}  # dicionario, parecido c json
    if number_one in my_dict:
        print(my_dict["1"])


# not work challenge_02()

challenge_work()
