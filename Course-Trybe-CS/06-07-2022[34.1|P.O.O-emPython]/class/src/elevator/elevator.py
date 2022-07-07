from enum import Enum, auto

from motor import MotorRotation


class Elvator():
    def __init__(self,motor):
        self.motor = motor
        self.door_is_open = False
        self._status = ElevatorStatus.STOPPED
        self.currente_floor = 0


    
    def move(self, destination):
        if destination > self.currente_floor:
            self.door_is_open = False
            self._status = ElevatorStatus.GOING_UP
            self.currente_floor = destination
            self.motor.rotation = MotorRotation.CLOCKWISE
        else:
            self.door_is_open = False
            self._status = ElevatorStatus.GOING_DOWN
            self.currente_floor = destination
            self.motor.rotation = MotorRotation.ANTICLOCKWISE

class ElevatorStatus(Enum):
    GOING_UP = auto()
    GOING_DOWN = auto()
    STOPPED = auto()
