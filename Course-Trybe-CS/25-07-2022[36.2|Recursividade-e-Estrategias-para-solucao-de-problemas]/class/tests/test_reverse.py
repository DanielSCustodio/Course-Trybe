from challenge.reverse import reverse

def test_reverse():
    assert reverse([0,1,2,3,4,5]) == [5,4,3,2,1,0]
    assert reverse([7,1,8,4,8]) == [8,4,8,1,7]
    assert reverse([7,1,8,1,7]) == [7,1,8,1,7]
    assert reverse([970]) == [970]
    assert reverse([]) == []

