filename = "document.txt"

def count_lines(file):
    try:
        with open(file, "r", encoding="utf-8") as f:
            length = len([s for s in f])
            print(f"Количество строк: {length}")
    except FileNotFoundError:
        print(f"Файл {file} не найден")

count_lines(filename)
