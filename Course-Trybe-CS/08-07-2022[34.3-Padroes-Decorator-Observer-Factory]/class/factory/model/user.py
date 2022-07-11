class User():
    def __init__(self, email, name, password):
        self.email = email
        self.name = name
        self.password = password

    def login(self, email, password):
        return(email == self.email) and (password == self.password)
