"""Типизация заказа"""

from typing import Literal, Optional, Set, TypedDict


class Order(TypedDict):
    id: int
    title: str
    amount: float
    email: str
    status: Literal["new", "in_progress", "done", "cancelled"]
    tags: Set[str]
    created_at: str
    due: Optional[str]
    closed_at: Optional[str]
