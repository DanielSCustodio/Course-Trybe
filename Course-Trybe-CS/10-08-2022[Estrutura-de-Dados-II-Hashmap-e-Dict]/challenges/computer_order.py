"""Dada uma lista de tuplas, que representa a relação de pessoas em uma fila, 
  retorne uma lista com as pessoas na order correta"""

"""
  [
    ("Bux", "Roberta"),
    ("Ivandro"), ("Bux"),
    ("Roberta", "Fernanda")
  ]
  Resultado = ["Ivandro","Bux", "Roberta", "Fernanda"]
"""


def get_order(orders: list):
    order_map = dict(orders) # transforma as tuplas em chave e valor
    p_lefts = [p_tuple[0] for p_tuple in orders]
    p_rights = [p_tuple[1] for p_tuple in orders]
    first_person = None

    for person in order_map.keys():
        if person not in order_map.values():
            first_person = person
    
    result = [first_person]

    while len(result) <= len(order_map):
        result.append(order_map[first_person])
        first_person = order_map[first_person]
    
    return result


def test_computer_order():
    orders = [
        ("fernanda", "rafa"),
        ("fran", "daniel"),
        ("mirian", "gabriel"),
        ("matheus", "yasmin"),
        ("giovanni", "fernanda"),
        ("rafa", "fran"),
        ("daniel", "mirian"),
        ("gabriel", "matheus"),
    ]

    assert get_order(orders) == [
        "giovanni",
        "fernanda",
        "rafa",
        "fran",
        "daniel",
        "mirian",
        "gabriel",
        "matheus",
        "yasmin",
    ]

print(get_order(
        [
            ("fernanda", "rafa"),
            ("fran", "daniel"),
            ("mirian", "gabriel"),
            ("matheus", "yasmin"),
            ("giovanni", "fernanda"),
            ("rafa", "fran"),
            ("daniel", "mirian"),
            ("gabriel", "matheus"),
        ]
    )
  )