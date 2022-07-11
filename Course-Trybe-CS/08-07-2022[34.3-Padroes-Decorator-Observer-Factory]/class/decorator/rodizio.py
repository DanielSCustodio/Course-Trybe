import random
from abc import ABC, abstractclassmethod


class SellerTeam:
    def __init__(self):
        self.__people = [
            "Batman",
            "Mulher Maravilha",
            "Canário Negro",
            "Shazan",
            "Sinestro",
        ]

    @property
    def people(self):
        return self.__people

    @people.setter
    def people(self, people):
        self.__people = people


class Rotation:
    def __init__(self, sellerTeam):
        self.sellerTeam = sellerTeam

    def next_seller(self):
        seller = random.choice(self.sellerTeam.people)
        print(f"A pessoa vendedora selecionad é {seller}")
        return seller


class Decorator(ABC):
    def __init__(self, rotation):
        self.rotation = rotation

    @abstractclassmethod
    def next_seller(self):
        pass


if __name__ == "__main__":
    seller_team = SellerTeam()
    list_sellers = seller_team.people
    #  print(list_sellers)
    rotation = Rotation(seller_team)
    rotation.next_seller()
