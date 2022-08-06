from linked_list.linked_list import LinkedList

def mid_element(input_list):
    mid_position = left(input_list) //2
    mid_node = input_list.get_element_at(mid_position)
    return mid_node

def test_mid_element():
    obj = LinkedList()
    obj.insert_last("Batman")
    obj.insert_last("Lex Luthor")
    obj.insert_last("Super Girl")
    obj.insert_last("Mulher maravilha")
    obj.insert_last("Lanterna Verde")