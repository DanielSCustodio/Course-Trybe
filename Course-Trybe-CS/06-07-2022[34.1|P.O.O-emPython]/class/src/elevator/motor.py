from enum import auto, Enum

class Motor():
    def __init__(self):
        self.running = False
        self.rotation = MotorRotation.CLOCKWISE

    def turn_on(self):
        self.running = True

    def turn_off(self):
        self.running = False

class MotorRotation(Enum):
    CLOCKWISE = auto()
    ANTICLOCKWISE = auto()
    