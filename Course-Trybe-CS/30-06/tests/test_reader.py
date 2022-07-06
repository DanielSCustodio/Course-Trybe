from src.reader import get_all_by_genre, get_all_by_console
import pytest

@pytest.fixture(scope="session")
def data():
    return [
        {
            "Title": "Hot Shots Golf: Open Tee",
            "Features": {
                "Handheld?": True,
                "Max Players": 1,
                "Multiplatform?": True,
                "Online?": True,
            },
            "Metadata": {
                "Genres": "Sports",
                "Licensed?": True,
                "Publishers": "Sony",
                "Sequel?": True,
            },
            "Metrics": {
                "Review Score": 81,
                "Sales": 0.49,
                "Used Price": 12.95,
            },
            "Release": {
                "Console": "Sony PSP",
                "Rating": "E",
                "Re-release?": True,
                "Year": 2004,
            },
            "Length": {
                "All PlayStyles": {
                    "Average": 0.0,
                    "Leisure": 0.0,
                    "Median": 0.0,
                    "Polled": 0,
                    "Rushed": 0.0,
                },
                "Completionists": {
                    "Average": 0.0,
                    "Leisure": 0.0,
                    "Median": 0.0,
                    "Polled": 0,
                    "Rushed": 0.0,
                },
                "Main + Extras": {
                    "Average": 0.0,
                    "Leisure": 0.0,
                    "Median": 0.0,
                    "Polled": 0,
                    "Rushed": 0.0,
                },
                "Main Story": {
                    "Average": 0.0,
                    "Leisure": 0.0,
                    "Median": 0.0,
                    "Polled": 0,
                    "Rushed": 0.0,
                    },
                },
            },
        {
                "Title": "Spider-Man 2",
                "Features": {
                    "Handheld?": True,
                    "Max Players": 1,
                    "Multiplatform?": True,
                    "Online?": True,
                },
                "Metadata": {
                    "Genres": "Action",
                    "Licensed?": True,
                    "Publishers": "Activision",
                    "Sequel?": True,
                },
                "Metrics": {
                    "Review Score": 61,
                    "Sales": 0.45,
                    "Used Price": 14.95,
                },
                "Release": {
                    "Console": "Nintendo DS",
                    "Rating": "E",
                    "Re-release?": True,
                    "Year": 2004,
                },
                "Length": {
                    "All PlayStyles": {
                        "Average": 13.25,
                        "Leisure": 48.38333333333333,
                        "Median": 10.0,
                        "Polled": 37,
                        "Rushed": 7.066666666666666,
                    },
                    "Completionists": {
                        "Average": 72.56666666666666,
                        "Leisure": 78.86666666666666,
                        "Median": 72.56666666666666,
                        "Polled": 2,
                        "Rushed": 66.28333333333333,
                    },
                    "Main + Extras": {
                        "Average": 12.766666666666667,
                        "Leisure": 17.316666666666666,
                        "Median": 12.5,
                        "Polled": 12,
                        "Rushed": 10.483333333333333,
                    },
                    "Main Story": {
                        "Average": 8.35,
                        "Leisure": 11.083333333333334,
                        "Median": 8.0,
                        "Polled": 23,
                        "Rushed": 5.333333333333333,
                    },
                },
            },
        {
            "Title": "The Urbz: Sims in the City",
            "Features": {
                "Handheld?": True,
                "Max Players": 1,
                "Multiplatform?": True,
                "Online?": True,
            },
            "Metadata": {
                "Genres": "Simulation, Action",
                "Licensed?": True,
                "Publishers": "EA",
                "Sequel?": True,
            },
            "Metrics": {
                "Review Score": 67,
                "Sales": 0.41,
                "Used Price": 12.95,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Rating": "M",
                "Re-release?": True,
                "Year": 2004,
            },
            "Length": {
                "All PlayStyles": {
                    "Average": 21.933333333333334,
                    "Leisure": 25.5,
                    "Median": 20.0,
                    "Polled": 7,
                    "Rushed": 16.733333333333334,
                },
                "Completionists": {
                    "Average": 30.033333333333335,
                    "Leisure": 30.033333333333335,
                    "Median": 30.033333333333335,
                    "Polled": 2,
                    "Rushed": 30.033333333333335,
                },
                "Main + Extras": {
                    "Average": 20.833333333333332,
                    "Leisure": 25.2,
                    "Median": 20.0,
                    "Polled": 3,
                    "Rushed": 16.45,
                },
                "Main Story": {
                    "Average": 15.5,
                    "Leisure": 15.75,
                    "Median": 15.5,
                    "Polled": 2,
                    "Rushed": 15.25,
                },
            },
        },
    ]

def test_get_all_by_genre_sucess(data):
    filtered_games = get_all_by_genre(data, "Simulation")
    assert "The Urbz: Sims in the City" in filtered_games
    
def test_get_all_by_console_sucess(data):
    filtered_games = get_all_by_console(data, "Nintendo DS")
    expect = ["Spider-Man 2", "The Urbz: Sims in the City"] 
    assert_list = [(title in expect) for title in filtered_games]
    # (title in expect) retorna true ou false 
    assert all(assert_list) 
    # all() verifica se todos valores são verdadeiros