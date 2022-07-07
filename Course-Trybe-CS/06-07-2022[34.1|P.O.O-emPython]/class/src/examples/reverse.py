def reverse_list(elements):
    result = []
    for item in elements:
        result.insert(0, item)
    return result


list = [1, 2, 3, 4, 5]
print(reverse_list(list))
list.reverse()
print(list)
