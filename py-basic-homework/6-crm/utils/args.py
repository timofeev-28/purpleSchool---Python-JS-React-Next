"""Модуль разбора аргументов"""

def parse_add(args: list[str]):
    """Функция разбора и проверки аргументов"""

    if not args:
        raise ValueError("Использование: add <id> <title> <amount> <email> [tags=a,b,c]")

    title = args[1]

    try:
        try:
            id = int(args[0])
        except ValueError as e:
            raise ValueError(f"В значении номера заказа должны быть только цифры") from e
        try:
            amount = float(args[2])
        except ValueError as e:
            raise ValueError(f"В значении суммы заказа должны быть только цифры") from e

        email = args[3]

        if not args[4].startswith("tags="):
            raise ValueError("Ошибка в написании tags")
        else:
            tags_str = args[4].split("=", 1)[1]
            tags = set(tags_str.split(","))

    except ValueError as e:
        raise ValueError({e}) from e


    return id, title, amount, email, tags
