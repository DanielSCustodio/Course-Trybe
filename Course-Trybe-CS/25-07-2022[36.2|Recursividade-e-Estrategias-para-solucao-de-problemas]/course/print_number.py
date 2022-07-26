def print_number(n, m):
    if n == m:
        return print(n)
    else:
        print(n)
        return print_number(n + 1, m)


print_number(128, 512)