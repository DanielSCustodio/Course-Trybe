from node import Node

class LinkedListGuard():
    def __init__(self) -> None:
        self.head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedListGuard(len => {self.__length}, head => {self.head})"