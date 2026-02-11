import random
import string

passwords = {}


def generate__password(length: int = 8, use_symbols: bool = True):
    if length < 3:
        return

    letters = string.ascii_letters
    digits = string.digits
    symbols = "!@#$%&*?"
    pool = letters + digits + (symbols if use_symbols else "")

    password_chars: list[str] = []

    while len(password_chars) < length:
        password_chars.append(random.choice(pool))

    return "".join(password_chars)


def show_passwords():
    if passwords:
        print("Key".ljust(12), " | ", "Value")
        for key, passw in passwords.items():
            print(key.ljust(12), passw)
    else:
        print("Пока паролей нет")


def add_password():
    domain = input("Введите домен: ")
    passwords[domain] = generate__password()
    print(f"Пароль для {domain} добавлен")


def delete_password():
    passw = input("Введите ключ пароля: ")
    if passw not in passwords:
        print("Нет такого пароля")
    else:
        p = passwords.pop(passw)
        print(f"Пароль {p} удалён")


def update_password():
    passw = input("Введите ключ пароля для обновления: ")
    if passw in passwords:
        passwords[passw] = generate__password()
        print(f"Пароль {passw} обновлён")
    else:
        print("Нет такого пароля")


def show_menu():
    # print("Выберите меню:")
    # print("1. Показать пароли")
    # print("2. Добавить пароль")
    # print("3. Удалить пароль")
    # print("4. Обновить пароль")
    # print("5. Выход")
    print("================")
    user_select = input("Ваш выбор (1, 2, 3, 4, 5): ")

    match user_select:
        case "1":
            show_passwords()
        case "2":
            add_password()
        case "3":
            delete_password()
        case "4":
            update_password()
        case _:
            exit()


while True:
    show_menu()
