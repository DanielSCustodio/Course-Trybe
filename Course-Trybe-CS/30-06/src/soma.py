def soma(a,b):
    return a + b;

def test_soma_positivo():
    assert soma(3,7) == 10


def test_soma_negativo():
    assert soma(-3,-7) == -10
