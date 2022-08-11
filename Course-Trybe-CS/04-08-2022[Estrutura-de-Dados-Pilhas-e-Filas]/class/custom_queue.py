from collections import deque


class Queue():
    def __init__(self):
        self._data = deque()

    def enqueue(self, value): # enfileirar - adicionar ao final da fila
        self._data.append(value)
    
    def dequeue(self): # desenfileirar - remover no inicio da fila
        return self._data.popleft()
    
    def peek(self):
        return self._data[0] # verificar quem está no início da fila
    
    def is_empty(self):
        return not self._data
    
    def clear(self):
        self._data.clear()

    def __len__(self):
        return len(self._data)