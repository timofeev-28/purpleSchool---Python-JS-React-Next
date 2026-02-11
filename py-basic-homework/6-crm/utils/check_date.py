"""Модуль проверки правильности введённой даты"""

from datetime import datetime


def check_date(date_str: str) -> bool:
    """Функция проверяет порядок ввода года, месяца и дня в дате"""
    
    try:
        datetime.strptime(date_str, "%Y-%m-%d")
        return True
    except ValueError:
        return False
