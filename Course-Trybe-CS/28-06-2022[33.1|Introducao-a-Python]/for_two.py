restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filter_restaurants = []
min_rating = 3

for i in restaurants:
    if i["nota"] >= min_rating:
        filter_restaurants.append(i)

print(filter_restaurants)

for index in range(5):
    print(index)
