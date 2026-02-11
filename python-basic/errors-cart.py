class ShopError(Exception):
    """Базовый класс ошибки магазина"""
    pass
class EmptyCartError(ShopError):
    pass
class OutOfStockError(ShopError):
    pass
class InvalidCouponError(ShopError):
    pass


carts = [
    ([], None), # пустая корзина
    ([{"item": "Phone", "price": 700, "in_stock": False}], None), # нет в наличии
    ([{"item": "Laptop", "price": 1000, "in_stock": True}], "BADCODE"), # плохой купон
    ([{"item": "Laptop", "price": 1000, "in_stock": True}], "SALE20"), # валидный заказ
]

def checkout(cart, coupon=None):
    if not cart:
        raise EmptyCartError("Корзина пуста")
    total = 0
    for product in cart:
        if not product.get("in_stock", True):
            raise OutOfStockError(f"{product["item"]} нет в наличии")
        total += product["price"]

    if coupon:
        if coupon != "SALE20":
            raise InvalidCouponError(f"Купон {coupon} не валиден")
        
    return total

for cart, coupon in carts:
    try:
        result = checkout(cart, coupon)
        print(f"Итоговая сумма {result}")
    except OutOfStockError as e:
        print(F"Ошибка: нет товара - {e}")
    except InvalidCouponError as e:
        print(f"Ошибка: купон не действителен - {e}")
    except EmptyCartError as e:
        print(F"Пустая корзина - {e}")
    except ShopError as e:
        print(F"Другая ошибка магазина - {e}")





