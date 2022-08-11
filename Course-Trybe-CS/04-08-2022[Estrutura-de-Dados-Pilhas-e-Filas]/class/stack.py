class Stack():
    def  __init__(self):
        self._data = list()
    
    def push(self, value):
        self._data.append(value)
    
    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1] # [-1] = último elemento
        del self._data[-1]
        return value

    def peek(self):  #verifica ultimo elemento
        if self.is_empty():
            return None
        
        value = self._data[-1]
        return value
    
    def __len__(self):
        return len(self._data)

    def is_empty(self):
        return not bool(len(self))

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)

            if i + 1 < self.size():
                str_items += ", "

        return "Stack("+str_items + ")"


