from node import Node

class LinkedListGuard():
    def __init__(self) -> None:
        self.head = None
        self.tail = None
        self.__length = 0

    def __str__(self):
        return f"LinkedListGuard(len => {self.__length}, head => {self.head})"

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head
        self.head = first_value

        if self.__length == 0:
            self.tail = self.head

        self.__length += 1
    
    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        last_value = Node(value)
        self.tail.next = last_value
        self.tail = last_value
        
        self.__length += 1

    def is_empty(self):
        return not self.__length