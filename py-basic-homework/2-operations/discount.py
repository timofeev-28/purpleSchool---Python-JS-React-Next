price = int(input('Запишите цену товара: '))
discount = int(input('Запишите скидку на товар: '))

res = price - (price / 100 * discount)
print(f'Цена со скидкой {res}')
