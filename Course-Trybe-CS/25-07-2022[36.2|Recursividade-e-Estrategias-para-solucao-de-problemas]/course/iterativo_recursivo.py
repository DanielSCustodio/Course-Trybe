def countdown(n):
    if n == 0: # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1) # caso recursivo

# countdown(5)

def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")

# iterative_countdown(5)

def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1): # +1 é coisa do range 😅
        print(i)
        fact = fact * i

    return fact

print(iterative_factorial(5))