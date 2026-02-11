from functools import reduce

orders = [
    {"id": 1, "user": "Anton", "items": [
        {"name": "Laptop", "price": 1000},
        {"name": "Mouse", "price": 50}
    ]},
    {"id": 2, "user": "Kate", "items": [
        {"name": "Phone", "price": 1000}
    ]},
    {"id": 3, "user": "Oleg", "items": [
        {"name": "Monitor", "price": 300},
        {"name": "Keyboard", "price": 100}
    ]}
]


# def get_sum(acc, sum_el):
#     lst = sum_el.get("items", [])
#     res = reduce(lambda a, x: a + x.get("price", 0), lst, 0)
#     return acc + res


# def get_res():
#     res_sum = reduce(get_sum, orders, 0)
#     res_orders = reduce(lambda acc, x: acc +
#                         len(x.get("items", [])), orders, 0)
#     return (res_sum, res_orders)


def aggregate(acc: dict, order: dict) -> dict:
    order_sum = sum(item["price"] for item in order["items"])
    order_count = len(order["items"])
    return {
        "total_price": acc["total_price"] + order_sum,
        "total_items": acc["total_items"] + order_count
    }


result = reduce(aggregate, orders, {"total_price": 0, "total_items": 0})

print(result)
