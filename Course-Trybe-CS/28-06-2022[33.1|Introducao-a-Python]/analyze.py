from utils import word_count, characters_count, characters_count_unique


def analyzer(text):
    characters_count_unique_report = (
        "Cacarteres unicos: " + str(characters_count_unique(text))
    )

    word_count_report = "Número de palavras é " + str(word_count(text)) + ".\n"

    characters_count_report = (
        "Número de cacarteres: " + str(characters_count(text)) + ".\n"
    )

    return (
      characters_count_report +
      word_count_report + characters_count_unique_report
    )


text_to_analyze = (
    "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui"
    "Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet"
    "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
)


print(analyzer(text_to_analyze))
