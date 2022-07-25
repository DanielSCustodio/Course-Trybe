from tkinter.filedialog import test


def check_sum(numbers, target):
    """for index_1, n_1 in enumerate(numbers):  # N²
        for index_2, n_2 in enumerate(numbers):
            if(index_1 != index_2) and (n_1 + n_2 == target):
                return True
    return False"""
    left_index = 0;
    right_index = len(numbers) - 1

    while left_index < right_index:  # O(N)
        test_sum = numbers[left_index] + numbers[right_index]
        if test_sum == target:
            return True
        elif test_sum < target:
            left_index += 1
        else:
            right_index -= 1
    return False
