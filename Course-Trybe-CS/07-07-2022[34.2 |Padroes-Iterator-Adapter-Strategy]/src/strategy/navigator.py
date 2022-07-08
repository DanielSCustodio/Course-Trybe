from navigator_strategies import WalkStrategy, BikeStartegy, BusStartegy


class Navigator():
    def __init__(self, strategy):
        self.__strategy = strategy

    def build_route(self, departure, arrival):
        self.__strategy.build_route(departure, arrival)


object_navigator = Navigator(BusStartegy)
object_navigator.build_route("Casa", "Padaria")


object_navigator = Navigator(WalkStrategy)
object_navigator.build_route("Casa", "Padaria")


object_navigator = Navigator(BikeStartegy)
object_navigator.build_route("Casa", "Padaria")
