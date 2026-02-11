# Создание кастомного исключения
class ValidationError(Exception):
    pass

def validate_user_data(user_data):
    if len(user_data.get("name", "").strip()) == 0:
        raise ValidationError("Имя не может быть пустым")
    if user_data.get("age", 0) <= 0:
        raise ValidationError("Возраст должен быть положительным числом")
    if "@" not in user_data.get("email", ""):
        raise ValidationError("email должен содержать символ '@'")
    return "Данные пользователя корректны"

# Тестовые данные
test_users = [
    {"name": "Иван", "age": 25, "email": "ivan@mail.ru"},
    {"name": "", "age": 25, "email": "ivan@mail.ru"},
    {"name": "Иван", "age": -5, "email": "ivan@mail.ru"},
    {"name": "Петр", "age": 30, "email": "petr.mail.ru"}
]

# for user in test_users:
#     try:
#         print(validate_user_data(user))
#     except ValidationError as e:
#         print(f"ValidationError: {e}")
# ==================================================


def calculate_safely(a, b, operation):
    try:
        if operation == '+':
            result = a + b
        elif operation == '-':
            result = a - b
        elif operation == '*':
            result = a * b
        elif operation == '/':
            result = a / b
        else: 
            return f"Ошибка: Неподдерживаемая операция '{operation}'"
        return (f"Результат: {result}")
    except Exception as e:
        return f"Ошибка: {e}"

# Тестирование функции
# print(calculate_safely(10, 5, '+'))
# print(calculate_safely(10, 0, '/'))
# print(calculate_safely(10, 5, '%'))
# print(calculate_safely("10", 5, '+'))
# ==============================================

class WeakPasswordError(Exception):
    pass

def check_password(password):
    try:
        if len(password) < 8:
            raise WeakPasswordError("Пароль должен содержать минимум 8 символов")
        if not any(char.isdigit() for char in password):
            raise WeakPasswordError("Пароль должен содержать хотя бы одну цифру")
        print("Пароль корректен")
    except WeakPasswordError as e:
        print(f"WeakPasswordError: {e}")


# Тестирование функции
# check_password("mypass123")
# check_password("short")
# check_password("longpassword")
# ============================================


def safe_calculate(a, b, operation):
    try:
        try:
            a = int(a)
            b = int(b)
        except ValueError:
            raise ValueError("Некорректные типы данных")

        if operation == "+":
            return f"Результат: {a + b}"
        elif operation == "-":
            return f"Результат: {a - b}"
        elif operation == "*":
            return f"Результат: {a * b}"
        elif operation == "**":
            return f"Результат: {a ** b}"
        else:
            raise ValueError("Неподдерживаемая операция")
    except ValueError as e:
        return f"Ошибка: {e}"
    finally:
        print(f"Лог: Операция {a} {operation} {b} завершена")

# Тестирование функции
# print(safe_calculate(2, 3, '**'))
# print(safe_calculate(10, 0, '/'))
# print(safe_calculate('abc', 5, '+'))
# =============================================


def extract_nested_value(data, keys):
    try:
        current = data
        for k in keys:
            current = current[k]
    except KeyError:
        return "Ошибка: Путь не найден"
    else:
        return f"Значение найдено: {current}"

# Тестирование
test_data1 = {"user": {"profile": {"name": "Анна"}}}
test_keys1 = ["user", "profile", "name"]

test_data2 = {"user": {"profile": {"name": "Анна"}}}
test_keys2 = ["user", "settings", "theme"]

test_data3 = {"config": {"database": {"host": "localhost"}}}
test_keys3 = ["config", "database", "host"]

print(extract_nested_value(test_data1, test_keys1))
print(extract_nested_value(test_data2, test_keys2))
print(extract_nested_value(test_data3, test_keys3))

