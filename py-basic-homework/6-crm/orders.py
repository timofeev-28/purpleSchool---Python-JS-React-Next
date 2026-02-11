"""Бизнес-логика заказов"""

from typing import Optional, Set
from type_order import Order
from utils.orders_stor import orders, remove_ord, edit_stor


def create_order(id_: int, title: str, amount: float, email: str, tags: Set[str], created_at: str, due: Optional[str] = None, closed_at: Optional[str] = None) -> Order:
    """Функция создаёт заказ"""

    order: Order = {
        "id": id_,
        "title": title,
        "amount": amount,
        "email": email,
        "status": "new",
        "tags": tags,
        "created_at": created_at,
        "due": due,
        "closed_at": closed_at
    }
    return order


def list_orders() -> str:
    """Функция показывает список заказов"""

    orders_list = ""
    for o in orders:
        orders_list += f"Заказ №{o['id']} - {o['title']}, стоимость {o['amount']}, создан {o['created_at']}, срок выполнения {o['due']}, статус {o['status']}\n"
    return orders_list if orders_list else "Список заказов пуст"


def edit_order(args):
    """Функция редактирует заказ по id"""

    if not args:
        raise ValueError("При редактировании заказа нужно указать его id")
    if not args[0].isdigit():
        raise ValueError("При редактировании заказа id должен состоять из цифр")
    if not args[1:]:
        raise ValueError("При редактировании заказа нужно указать редактируемые параметры")

    id = int(args[0])
    params = args[1:]
    edit_stor(id, params)



def remove_order(args: list[str]) -> None:
    """Функция удаляет заказ по id"""

    if not args:
        raise ValueError("При удалении заказа нужно указать его id")
    if not args[0].isdigit():
        raise ValueError("При удалении заказа id должен состоять из цифр")
    
    id = int(args[0])
    remove_ord(id)
