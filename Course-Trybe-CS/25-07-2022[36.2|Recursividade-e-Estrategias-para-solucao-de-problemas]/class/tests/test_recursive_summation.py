from challenge.recursive_summation import recursive_summation

def test_recursive_summation():
    assert recursive_summation(5) == 15
    assert recursive_summation(5) != 14
    assert recursive_summation(6) == 21
    assert recursive_summation(10) == 55
    assert recursive_summation(100) == 5050