from src.importer import import_data
from src.analyzer import sales_by_console
from src.exporter import export_report


def main():
    MENU_OPTIONS ="""
    0 - Sair
    1 - Realizar analise
    """

    user_input = input(MENU_OPTIONS)

    if user_input == '0':
        print("Saindo...")
        return None

    games_data = import_data()
    if user_input == '1':
        report = sales_by_console(games_data)
        print("Gravando...")
        export_report(report)
    else:
        print("Opção inválida, saindo...")
        return None
    

main()