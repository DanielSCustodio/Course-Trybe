from model.product import Product
import factory

factory.Faker._DEFAULT_LOCALE = "pt_BR"


class ProductFactory(factory.Factory):

    class Meta:
        model = Product

    id = factory.Faker("uuid4")
    nome_do_produto = factory.Faker("name")
    nome_da_empresa = factory.Faker("name")
    data_de_fabricacao = factory.Faker('date_this_year', before_today=True)
    data_de_validade = factory.Faker('date_this_year', before_today=False)
    numero_de_serie = factory.Faker("uuid4")
    instrucoes_de_armazenamento = factory.Faker("text")


def test_cria_produto():
    item = ProductFactory()
    obj = Product(
        item.id,
        item.nome_do_produto,
        item.nome_da_empresa,
        item.data_de_fabricacao,
        item.data_de_validade,
        item.numero_de_serie,
        item.instrucoes_de_armazenamento
    )

    result = (
                f"O produto {item.nome_do_produto}"
                f" fabricado em {item.data_de_fabricacao}"
                f" por {item.nome_da_empresa} com validade"
                f" até {item.data_de_validade}"
                f" precisa ser armazenado {item.instrucoes_de_armazenamento}."
            )

    assert obj.__repr__() == result
