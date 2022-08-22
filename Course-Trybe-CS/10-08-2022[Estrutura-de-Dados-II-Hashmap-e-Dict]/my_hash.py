def my_hash(string: str):
    result = 0
    for char in string:
        result += ord(char)
    return result


print(my_hash("Daniel"))