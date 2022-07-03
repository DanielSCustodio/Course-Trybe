def sales_by_console(games_data: list):
    all_consoles = set()

    for game in games_data:
        all_consoles.add(game["Release"]["Console"])

    result = dict.fromkeys(all_consoles, 0) #tipagem
    for game in games_data:
        game_console = game["Release"]["Console"]
        game_sales = game["Metrics"]["Sales"]
        result[game_console]+=game_sales
    return result