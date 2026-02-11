import json
from typing import TypedDict


class Student(TypedDict):
    name: str
    age: int
    course: str
    grades: list[int]
    active: bool


student: Student = {
    "name": "Анна Иванова",
    "age": 22,
    "course": "Информатика",
    "grades": [5, 4, 5, 3, 4],
    "active": True,
}


def get_str(data: Student) -> str:
    return json.dumps(data, ensure_ascii=False, indent=2)


print(get_str(student))
