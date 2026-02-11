import json
from typing import TypedDict
import os


class Book(TypedDict):
    title: str
    author: str
    year: int
    pages: int
    available: bool


book: Book = {
    "title": "Война и мир",
    "author": "Лев Толстой",
    "year": 1869,
    "pages": 1225,
    "available": True,
}

# с помощью библиотеки os можем прописывать абсолютный путь и добавить название файла
filename = os.path.join(os.getcwd(), "book.json")
print(filename)


def write_file(data: Book, filename: str) -> None:
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    with open(filename, "r", encoding="utf-8") as f:
        print(json.load(f))


write_file(book, filename)
