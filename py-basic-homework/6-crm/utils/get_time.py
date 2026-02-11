"""Модуль вычисления времени заказа и дедлайна"""

from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

deadline_period: int = 5

def get_time():
    """Возвращает текущую дату и время заказа, дату и время дедлайна"""

    now = datetime.now(ZoneInfo("UTC"))
    now_str = datetime.strftime(now, "%d-%m-%Y %H:%M:%S")
    deadline = now + timedelta(days=deadline_period)
    deadline_str = datetime.strftime(deadline, "%d-%m-%Y %H:%M:%S")
    return now_str, deadline_str
