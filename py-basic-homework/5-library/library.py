import sys

class BooksError(Exception):
    pass

books = {
    "Мастер и Маргарита": "Михаил Булгаков",
    "Записки юного врача": "Михаил Булгаков",
    "Морфий": "Михаил Булгаков",
    "У природы нет плохой погоды": "Эльдар Рязанов",
    "Ностальгия. Стихи и новеллы": "Эльдар Рязанов",
    "Служебный роман": "Эльдар Рязанов",
    "Малыш и Карлсон, который живёт на крыше": "Астрид Линдгрен",
    "Война и мир": "Лев Толстой",
    "Анна Каренина": "Лев Толстой"
}

def get_books(act, test):
    if act == "filter":
        filtered = (filter(lambda b: b[1] == test, books.items()))
        print(list(map(lambda b: f"{b[0]} - {b[1]}", filtered)))
    elif act == "sort":
        books_list = list(
            map(lambda book: f"{book[0]} - {book[1]}", books.items()))
        if test == "author":
            print(sorted(books_list, key=lambda book: book.split(" - ")[1]))
        elif test == "book":
            print(sorted(books_list, key=lambda book: book.split(" - ")[0]))


try:
    if len(sys.argv) < 3:
        raise BooksError("Мало аргументов при вызове, должно быть два")

    action = sys.argv[1]
    criterion = sys.argv[2]

    if action != "sort" and action != "filter":
        raise BooksError("Первый аргумент должен быть равен 'sort' или 'filter'")

    if action == "sort" and criterion not in ("author", "book"):
        raise BooksError("Ошибка: при значении первого параметра 'sort' значение второго параметра должно быть 'author' или 'book'")
    
    if __name__ == "__main__":
        get_books(action, criterion)
except BooksError as e:
    print(f"Ошибка: {e}")
