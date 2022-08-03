def contains_duplicate(numbers):
    numbers.sort() # O(n * log n)
    for index in range(len(numbers) - 1): # O(n)
        if (numbers[index] == numbers[index + 1]): # O(1)
            return True
    return False

def test_contains_duplicate():
    assert contains_duplicate([1]) is False
    assert contains_duplicate([1, 5]) is False
    assert contains_duplicate([1, 5, 4]) is False
    assert contains_duplicate([1, 5, 4, 8, 4]) is True
    assert contains_duplicate([1, 5, 4, 8, 2, 3, 9, 6, 7]) is False
    assert contains_duplicate([1, 5, 5, 3, 2, 6, 9, 5, 3]) is True


