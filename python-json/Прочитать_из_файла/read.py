filename = "notes.txt"

def read_file():
    with open(filename, "r", encoding="utf-8") as f:
        text = f.read()
        print(text)

read_file()
