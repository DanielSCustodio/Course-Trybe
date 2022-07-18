class User():
    def __init__(self, email, name, password, nationality):
        self.email = email
        self.name = name
        self.password = password
        self.nationality = nationality

    def login(self, email, password):
        return(email == self.email) and (password == self.password)
