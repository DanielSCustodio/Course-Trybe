class Custom_list(list):  # classe herdada de list, list é uma classe do Python
    def remove_all(self, value):
        while True:
            try:
                super().remove(value)  # super garante que o método chamado é da classe superior
            except ValueError:
                break

    @staticmethod  # método estático não é chamado por um instância e sim pela própria classe, não acessa atributo da classe
    def get_class_name():
        return "Custom_list"


object_list = Custom_list([1, 2, 3, 3, "caqui", 33, 3, False])
print(object_list)

object_list.remove(False)
print(object_list)

object_list.remove_all(3)
print(object_list)

print(Custom_list.get_class_name())
