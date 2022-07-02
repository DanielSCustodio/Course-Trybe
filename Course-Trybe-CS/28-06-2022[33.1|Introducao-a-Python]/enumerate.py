languages = ["Javascript", "Python", "Ruby", "Java"]
enumerate_prime = enumerate(languages)

# print(list(enumerate_prime))

for index, item in enumerate(languages):
    print(f'{index * 2} -- {item}')
