from abc import ABC, abstractmethod

# NavigatorStrategy() Serve como contrato para que todas as classes herdadas
#  tenha o método que aqui foi implementado


class NavigatorStrategy(ABC):
    @classmethod
    @abstractmethod
    def build_route(cls, departure, arrival):
        pass


class BusStartegy():
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"🚏 Rota de ônibus, saindo de {departure} para {arrival} ")


class BikeStartegy():
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"🚲 Rota de bike, saindo de {departure} para {arrival} ")


class WalkStrategy():
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"🚶‍♂️ Rota a pé, saindo de {departure} para {arrival} ")
