def best_turistic_area(list):
    max_points = 0
    for i, n_current in enumerate(list):
        for j, n_compared in enumerate(list):
            if i != j:
                points = n_current + n_compared - abs(i - j)
                if points > max_points:
                    max_points = points
    return max_points


# Maior número obtido da soma entre um par dos elementos do array subtraindo a distância entre esse par.
def test_best_turistic_area():
    assert best_turistic_area([8, 1, 5, 2, 6]) == 11
    assert best_turistic_area([4, 1, 5, 2, 6]) == 9

