names = [
    {"name": "Daniel", "role": "developer"},
    {"name": "Israel", "role": "designer"},
    {"name": "Flávia", "role": "social media"},
]

roles = []

for item in names:
    roles.append(item["role"])

# print(roles)


without_developer = [item for item in names if item["role"] != "developer"]
# print(without_developer)

role_without_dev = [i["name"] for i in names if i["role"] != "developer"]
print(role_without_dev)
