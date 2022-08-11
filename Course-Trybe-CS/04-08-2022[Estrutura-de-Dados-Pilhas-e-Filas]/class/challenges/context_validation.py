from stack import Stack


def validate_context(context:str):
    open_chars = "{(["
    close_chars = "])}"

    control_stack = Stack()

    for char in context:
        if char in open_chars:
            control_stack.push(char)
            continue
        
        if char in close_chars:
            if char == ")" and control_stack.peek() == "(":
                control_stack.pop()

            elif char == "]" and control_stack.peek() == "[":
                control_stack.pop()

            elif char == "}" and control_stack.peek() == "{":
                control_stack.pop()
            else:
                return False
        else:
            raise ValueError("Caracter inválido")
            
    return control_stack.is_empty()
            

def test_validate_context():
    assert validate_context("()") is True
    assert validate_context("{)") is False
    assert validate_context("()[]{}") is True
    assert validate_context("(]") is False
    assert validate_context("([)]") is False
    assert validate_context("{[]}") is True
    assert validate_context("{{}[][[[]]]}") is True
    assert validate_context("{{({})}}") is True
    assert validate_context("[[[]]]") is True
    assert validate_context("())") is False