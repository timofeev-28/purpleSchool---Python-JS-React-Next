filename = "data.txt"


# rstrip() здесь удаляет перенос строки справа - это нужно, тк print() добавляет ещё один перенос строки при выводе в цикле
def read_file_lines(file: str):
    try:
        with open(file, "r", encoding="utf-8") as f:
            for line in f:
                print(line.rstrip())
    except FileNotFoundError:
        print("[WARN] файл не найден")


read_file_lines(filename)
