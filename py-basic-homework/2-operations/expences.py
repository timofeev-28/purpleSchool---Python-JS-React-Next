food = int(input('Введите сумму на еду: '))
transport = int(input('Введите сумму на транспорт: '))
entertainment = int(input('Введите сумму на развлечения: '))
amount_expenses = 3

total_sum = food + transport + entertainment
average_value = total_sum / amount_expenses

print(f'Общая сумма трат {total_sum}, Средняя сумма трат {average_value}')
