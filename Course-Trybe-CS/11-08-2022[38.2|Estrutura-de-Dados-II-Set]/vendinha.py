shelf = [4, 1, 1, 13, 6, 3, 1, 7, 14, 20, 13, 9]
# shelf =[]


def to_buy(shelf):
    all_products = set(range(1, 21))
    my_products = set(shelf)
    return all_products.difference(my_products)

print(to_buy(shelf))