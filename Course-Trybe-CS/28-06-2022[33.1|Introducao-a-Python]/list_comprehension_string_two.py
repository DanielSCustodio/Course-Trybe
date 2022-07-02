phrase = "Proin eget tortor risus."
vowels = "aeiou"

list_vowels = []
list_consonants = []

list_vowels = [i for i in phrase if i in vowels]
print(list_vowels)


list_consonants = {i for i in phrase if i not in vowels}


print(list_consonants)
