"""Модуль вывода помощи пользователю"""

def help_command():
    """Фукция выводит список команд для работы приложения"""

    print("""Команды:
add <id> <"title"> <amount> <email> [tags=a,b,c] - Добавить заказ
list - Показать список заказов
edit <id> [[title=...] | [amount=...] | [email=...] | [status=...] | [due=YYYY-MM-DD] | [closed_at=YYYY-MM-DD]] - Изменить
remove <id> - Удалить
help - Помощь
exit - Выход
""")
