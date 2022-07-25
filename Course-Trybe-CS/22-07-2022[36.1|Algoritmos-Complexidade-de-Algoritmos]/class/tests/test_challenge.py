from src.challenge import check_sum
import pytest   


def test_check_sum():
    assert check_sum([-1,1,1,2,3,4],7) is True
    assert check_sum([1,2,5,8,13,21],3) is True
    assert check_sum([1,2,5,8,13,21],22) is True
    assert check_sum([1,1,2,4,4],7) is False
    assert check_sum([1,2,3,4],9) is False
    assert check_sum([120,300,4000],0) is False

    