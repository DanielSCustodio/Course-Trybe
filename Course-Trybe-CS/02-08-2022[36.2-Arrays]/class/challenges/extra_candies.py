def extra_candies(candies, extra):
    maximum = max(candies)
    result = []

    for child in candies:
        if maximum < child + extra:
            result.append(True)
        else:
            result.append(False)
    return result

# Se o item do array somado ao target for o maior od array então retorna True, caso contrário retorna False
def test_extra_candies():
    assert extra_candies([2, 2], 0) == [False, False]
    assert extra_candies([2, 1], 1) == [True, False]
    assert extra_candies([2, 1], 2) == [True, True]
    assert extra_candies([2, 3, 5, 1, 3], 3) == [False, True, True, False, True]
    assert extra_candies([20, 3, 5, 1, 3], 3) == [True, False, False, False, False]
    assert extra_candies([2, 3, 5, 1, 3], 0) == [False, False, False, False, False]
