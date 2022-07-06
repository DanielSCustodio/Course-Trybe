#O Python já implementa estes métodos por padrão para cada nova classe criada. Mas, você pode implementá-los novamente, ou seja, reescrevê-los. É desse modo que customizamos nosso construtor/inicializador.

class Liquidificador():
    def __init__(self, cor, potencia, voltagem):
        self.cor = cor
        self.potencia = potencia
        self.voltagem = voltagem
        self.ligado = False
        self.velocidade = 0
        self.velocidade_maxima = 3


    def __str__(self):
        return f""" 
        - Cor: {self.cor}
        - Potência: {self.potencia}
        - Voltagem: {self.voltagem}
        - Ligado: {self.ligado}
        - Velocidade: {self.velocidade}
        - Velocidade Máxima: {self.velocidade_maxima}
        """


liquidificador_azul = Liquidificador('Azul', 200, 127)
liquidificador_vermelho = Liquidificador('Vermelho', 250, 220)


print(liquidificador_azul)