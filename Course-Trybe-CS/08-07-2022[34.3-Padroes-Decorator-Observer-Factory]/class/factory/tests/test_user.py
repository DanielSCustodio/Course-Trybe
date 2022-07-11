from tests.factories.user_factory import UserFactory
from model.user import User


def test_create_user():
    user = User("daniel@daniel.com", "Daniel", "123")

    assert user.email == "daniel@daniel.com"
    assert user.name == "Daniel"
    assert user.password == "123"


def test_login():
    user = UserFactory()
    assert user.login(user.email, user.password) is True
