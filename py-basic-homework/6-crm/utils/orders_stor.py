"""Модуль для сохранения, изменения и удаления заказов в списке (Это временно)"""

from utils.check_date import check_date
from type_order import Order

class ORDER_ID(Exception):
    pass

orders: list[Order] = []


def rev_date(date_str: str) -> str:
    year, month, day = date_str.split("-")
    return f"{day}-{month}-{year}"

def check_id(id: int) -> bool:
    """Функция проверяет, есть ли уже такой номер заказа в списке"""

    return any(o.get("id") == id for o in orders)


def save_order(order: Order) -> None:
    """Функция сохраняет заказ в переменную orders"""

    order_id = order.get("id")
    if check_id(order_id):
        raise ORDER_ID(f"Заказ с номером {order_id} уже существует")
    orders.append(order)


def remove_ord(id: int) -> None:
    """ Функция удаляет заказ по id"""

    if not check_id(id):
        raise ORDER_ID(f"Заказа с номером {id} не существует")
    global orders
    orders[:] = [order for order in orders if order["id"] != id]


def edit_stor(id: int, args: list[str]):
    """ Функция изменяет заказ по id"""

    args_mod = []
    for arg in args:
        arg_list = arg.split("=")
        if arg.startswith("title="):
            args_mod.append(tuple(arg_list))
        elif arg.startswith("amount="):
            try:
                args_mod.append(tuple([arg_list[0], float(arg_list[1])]))
            except ValueError as e:
                raise ValueError(f"Сумма в 'amount' должна быть числом") from e
        elif arg.startswith("email="):
            if not "@" in arg_list[1]:
                raise ValueError("В email нет знака '@'")
            args_mod.append(tuple(arg_list))
        elif arg.startswith("status="):
            if not arg_list[1] in ("new", "in_progress", "done", "cancelled"):
                raise ValueError("В 'status' могут быть только значения: 'new', 'in_progress', 'done', 'cancelled'")
            args_mod.append(tuple(arg_list))
        elif arg.startswith("due="):
            if not check_date(arg_list[1]):
                raise ValueError("В написании 'due' ожидается формат 'YYYY-MM-DD'")
            args_mod.append(tuple([arg_list[0], rev_date(arg_list[1])]))
        elif arg.startswith("closed_at="):
            if not check_date(arg_list[1]):
                raise ValueError("В написании 'closed_at' ожидается формат 'YYYY-MM-DD'")
            args_mod.append(tuple([arg_list[0], rev_date(arg_list[1])]))
        else:
            raise ValueError("Проверьте правильность написания параметров на изменение заказа")

    for order in orders:
        if order["id"] == id:
            order.update(args_mod)

    print(orders)

