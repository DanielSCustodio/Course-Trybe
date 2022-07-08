
class ProfileConnections():
    def __init__(self, friends: list):
        self.__friends = friends

    def __iter__(self):  # funciona como um ponteiro sobre o item iterável
        return ProfileIterator(self.__friends.copy())
        # Repassando o iterável p/ o iterator


class ProfileIterator():  # classe do iterator
    def __init__(self, iterable_data):
        self.__data = iterable_data
        self.__index_counter = 0

    def __next__(self):  # o next torna o objeto iterator
        try:
            result = self.__data[self.__index_counter]  # item do array
        except IndexError:
            raise StopIteration
        self.__index_counter += 1
        return result


list_friends = ProfileConnections(["Daniel", "Silva", "Custódio"])
