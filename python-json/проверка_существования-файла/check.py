import os

filename = "backup.txt"

def check_and_create_file(file: str) -> None:
    if not os.path.exists(file):
        print("Файл backup.txt не существует. Создаю пустой файл.")
        with open(file, "w", encoding="utf-8") as f:
            f.write("")
    else:
        print("Файл backup.txt уже существует.")

check_and_create_file(filename)
