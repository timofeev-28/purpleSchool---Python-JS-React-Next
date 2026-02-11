# price = input("Введите сумму: ")

# lst = price.lower().split()

# if len(lst) <= 2 and lst[0].isdigit() and (lst[1] == "руб" or lst[1] == "р" or lst[1] == "рублей"):
#     res = f"{lst[0]}.00 ₽"
# elif len(lst) == 4 and lst[0].isdigit() and lst[2].isdigit() and (lst[1] == "руб" or lst[1] == "р" or lst[1] == "рублей") and (lst[3] == "коп" or lst[3] == "к" or lst[3] == "копеек"):
#     x = f"0{lst[2]}" if len(lst[2]) == 1 else f"{lst[2]}"
#     res = f"{lst[0]}.{x} ₽"
# else:
#     res = "Некорректный формат суммы"

expenses: list[int] = []


def add_expense(expenses: list[int], value: int) -> None:
    expenses.append(value)


def delete_expence(expenses: list[int], index: int) -> None:
    del expenses[index]


def get_total(expenses: list[int]) -> int:
    return sum(expenses)


def get_average(expenses: list[int]) -> float:
    return sum(expenses) / len(expenses)


def print_report(expenses: list[int]) -> None:
    print(
        f"Ваши расходы: {", ".join(map(str, expenses))}\n"
        f"Сумма ваших расходов: {get_total(expenses)} ₽\n"
    )


while True:
    while True:
        try:
            expense = int(input("Добавить расход: "))
            add_expense(expenses, expense)
            print(f"Расход {expense} ₽ добавлен")
        except:
            print("Значение расхода должно быть цифрой")
            continue

        exit = input("Хотите добавить ещё расход?: ").strip().lower()

        if not exit == "y" and not exit == "да":
            break

    while True:
        print(f"У вас {len(expenses)} записей расходов")

        try:
            if len(expenses):
                delete_expense = int(input(
                    f"Удалить расход (по индексу), значение индекса от 0 до {len(expenses) - 1}: "))
                delete_expence(expenses, delete_expense)
                print(f"У вас {len(expenses)} записей расходов")
            else:
                print(f"Удалять пока нечего")
        except:
            print(
                f"Значение индекса должно быть цифрой и не более {len(expenses) - 1}")
            continue

        exit = input("Хотите ещё удалить расход?: ").strip().lower()

        if not exit == "y" and not exit == "да":
            break

    is_total = input("Показать сумму расходов? ").strip().lower()
    if is_total == "y" or is_total == "да":
        print(f"Сумма расходов: {get_total(expenses)} ₽")

    is_average = input("Показать среднюю сумму расходов? ").strip().lower()
    if is_average == "y" or is_average == "да":
        if len(expenses) == 0:
            print(f"Пока нет записей в расходах")
        else:
            print(f"средняя сумма расходов: {get_average(expenses)} ₽")

    is_report = input("Показать полный отчёт? ").strip().lower()
    if is_report == "y" or is_report == "да":
        print_report(expenses)

    exit = input("Хотите выйти?: ").strip().lower()

    if exit == "y" or exit == "да":
        break
print('Работа программы завершена, спасибо')
