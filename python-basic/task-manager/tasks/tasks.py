from typing import TypedDict, Optional
from datetime import date

# Optional - это для того, чтобы можно было указать опционально, или-или

PRIORITIES = {"low", "med", "high"}

class Task(TypedDict):
    id: int
    title: str
    priority: str
    tags: Optional[list[str]]
    status: str
    due: Optional[date]

def make_task(id_: int, title: str, due: Optional[date] = None, priority: str = "med", tags: Optional[list[str]] = None) -> Task:
    if priority not in PRIORITIES:
        raise ValueError("Неверный приоритет. Можно только low | med | high")
    task: Task = {
        "id": id_,
        "title": title.strip(),
        "priority": priority,
        "tags": tags,
        "status": "new",
        "due": due
    }
    return task
