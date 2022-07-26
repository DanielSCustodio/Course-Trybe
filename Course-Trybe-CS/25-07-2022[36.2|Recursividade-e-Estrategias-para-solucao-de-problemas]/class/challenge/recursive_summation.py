def recursive_summation(n):
    if n == 1:
        return 1
    return n + recursive_summation(n-1)

# print(recursive_summation(999)) #  maximum recursion depth in comparison
