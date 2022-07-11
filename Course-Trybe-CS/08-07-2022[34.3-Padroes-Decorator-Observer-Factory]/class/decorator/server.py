"""Adiciona novas responsabilidades a um *objeto* dinamicamente.
Decorators proveem uma alternativa a 'herança', para extensão de
funcionalidades, de forma flexível"""


from abc import ABC, abstractmethod


class BaseServer(ABC):
    @abstractmethod
    def start(self):
        raise NotImplementedError

    @abstractmethod
    def end(self):
        raise NotImplementedError


class Server(BaseServer):
    def __init__(self, name):
        self.name = name
        self.running = False

    def start(self):
        print(f"O servidor <{self.name}> foi iniciado")
        self.running = True

    def end(self):
        print(f"O servidor <{self.name}> foi parado")
        self.running = False


class ServerDecorator(BaseServer):
    def __init__(self, server):
        self._server = server


class DecoratorSecurity(ServerDecorator):

    def __check_password(self):
        password = input("Entre com a senha: ")

        if password == '123':
            print("Acesso aprovado, jovem")
            return True

        else:
            print("Acesso negado, jovem. Sua atitude é suspeita")
            return False

    def start(self):
        if self.__check_password():  # compara e chama a função de comparação
            self._server.start()

    def end(self):
        if self.__check_password():
            self._server.end()


class DecoratorScream(ServerDecorator):

    def start(self):
        self._server.start()
        print("COMEÇOU")

    def end(self):
        print("DIGITE A SENHA PRA IR EMBORA")
        self._server.end()


local_server = DecoratorScream(DecoratorSecurity(Server("Trybe API")))
local_server.start()
local_server.end()
