from profile import ProfileConnections


def test_can_iterate_over_instance():
    friends = ["Zambs", "Cestari", "Isaac", "Carol", "QArlos"]
    # Iterable = Iterável = passeável
    connections = ProfileConnections(friends)

    # Iterator = Iterador = quem faz o passeio
    con_iterator = iter(connections)

    next_friend = next(con_iterator)
    assert next_friend == friends[0]

    next_friend = next(con_iterator)
    assert next_friend == friends[1]


def test_can_use_instance_in_loop():
    friends = ["Zambs", "Cestari", "Isaac", "Carol", "QArlos"]
    connections = ProfileConnections(friends)

    for user in connections:
        assert user in friends
