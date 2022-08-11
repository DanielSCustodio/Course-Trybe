from custom_queue import Queue

class PriorityQueue():
    """Fila com prioridades"""
    def __init__(self, age_limit:int):
        self.__priority = Queue()
        self.__standart = Queue()
        self.__age_limit = age_limit

    def enqueue(self, age:int):
        if age >= self.__age_limit:
            self.__priority.enqueue(age) #empilhando
        else:
            self.__standart.enqueue(age) #empilhando
    
    def dequeue(self):
        if len(self.__priority) > 0:
            return self.__priority.dequeue()
        else:
            return self.__standart.dequeue()


    def __len__(self):
        return len(self.__priority) + len(self.__standart)


def test_priority_queue():
    q = PriorityQueue(44)
    q.enqueue(23)
    q.enqueue(12)
    q.enqueue(56)
    q.enqueue(78)
    q.enqueue(21)
    q.enqueue(90)
    q.enqueue(3)
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    print(q.dequeue())
    assert len(q) == 0

test_priority_queue()