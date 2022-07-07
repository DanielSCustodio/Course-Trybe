class Person():
    info= "Classe para cálculo de aniversário" # método da classe, poderá ser acessado por todos os métodos
    def __init__(self, name):
        self.name = name
        self.__age = 0

    def __calcule_age(self):  # método privado
        if self.__age == 1:
            print(
                f"Happy birthday to you...\nIdade atual: {self.__age} ano \n")
        else:
            print(
                f"Happy birthday to you... \nIdade atual: {self.__age} anos \n")

    def anniversay(self):
        self.__age += 1
        self.__calcule_age()

    @classmethod # método da classe, acessa os atributos da classe, o método chamdo pela classe ou instância
    def info_class(cls):
        print(cls.info)


person = Person("Jão")
person.name = "Jhon"
person.anniversay()
person.anniversay()
print(person.name)
Person.info_class()
