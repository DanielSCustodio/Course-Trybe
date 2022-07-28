"""
Dado um hitórico de commits, encontre o primeiro commit problemático

Cada commit:
    {
        "author": str(),
        "commit_message": str(),
        "test_passing": bool(),
    }

"""
from commits import COMMIT_HISTORY


def find_bad_commit(commit_history):
    for id, commit in enumerate(commit_history):
        if not commit["test_passing"]:
            return id;


def smart_find_bad_commit(commit_history):
    start = 0
    counter = 0
    end = len(commit_history)

    while start < end:
        midlle = (start + end) // 2
        print("up", start, end)
        if commit_history[midlle]["test_passing"] is True:
            start = midlle + 1
            print("midlle", start)
        else:
            end = midlle
        print("down", start, end)
        print("---------------")

    return [start]



bad_commit_id = smart_find_bad_commit(COMMIT_HISTORY)
print(bad_commit_id)

