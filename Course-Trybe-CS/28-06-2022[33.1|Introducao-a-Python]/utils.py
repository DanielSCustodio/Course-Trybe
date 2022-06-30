def word_count(text):
    return len(text.split())


def characters_count(text):
    return text.count('') + 1


def characters_count_unique(text):
    characters_count_unique = dict()
    for char in text:
        if char not in characters_count_unique:
            characters_count_unique[char] = text.count(char)
    return characters_count_unique
