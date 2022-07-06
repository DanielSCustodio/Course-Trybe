#Composição é atribuir o objeto de uma classe a outra, gerando assim um relacionamento de pertencimento entre eles.
class Liquidificador():
    def __init__(self, cor, potencia, voltagem):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


class Pessoa():
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:   #criar preço na class liquidificador
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


liquidificador_vermelho = Liquidificador("Vermelho", 250, 220)
pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)