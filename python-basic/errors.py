def divide(a: float, b: float):
    if b == 0:
        raise ZeroDivisionError("Нельзя делить на ноль!")
    return a / b


def calculate():
    try:
        divide(10, 0)
    except ZeroDivisionError as e:
        print("Деление на 0")
        print(e)
        raise  # raise без аргументов пробрасывает ошибку из except ещё выше


try:
    calculate()
except ZeroDivisionError:
    print("Поймали выше")
    print("===============")


# =================================================
# Создание ошибок

# Создаём ошибку как класс (наследуемся от общего класса ошибок)

class InvalidAgeError(Exception):
    pass


def set_age(age: int):
    if age < 0:
        raise InvalidAgeError("Возраст должен быть больше нуля")
    return age


try:
    set_age(-1)
except InvalidAgeError as e:
    print(e)
