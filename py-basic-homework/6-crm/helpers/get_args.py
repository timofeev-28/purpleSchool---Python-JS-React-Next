"""Модуль создаёт и собирает аргументы для вызова функции по созданию заказа"""


from utils.get_time import get_time
from utils.args import parse_add
from orders import create_order
from utils.orders_stor import save_order


def get_args(args: list[str]) -> None:
    """Функция создаёт и собирает аргументы для вызова функции по созданию заказа"""

    created_at, due = get_time()
    id, title, amount, email, tags = parse_add(args)
    order = create_order(id, title, amount, email, tags, created_at, due)
    save_order(order)
