"""Банковский аккаунт"""


class BankAccount:
    """Описывает счёт простого вида"""

    accounts = []

    def __init__(
        self, name: str, account_number: str | int, balance: float | int = 0
    ):
        self.name = name
        self.account_number = account_number
        if not isinstance(balance, (float, int)):
            raise ValueError(
                f"balance должен быть числом, пришло {type(balance)}"
            )
        self.balance = float(0 if balance < 0 else balance)
        BankAccount.accounts.append(self)

    @classmethod
    def get_accounts_created(cls):
        """Счётчик созданных аккаунтов"""
        return len(cls.accounts)

    def deposit(self, amount: float | int):
        """Пополняет счёт"""
        if amount <= 0:
            print("Для пополнения счёта нужна положительная сумма")
            return
        self.balance += amount
        print(
            f"Баланс счёта {self.account_number} пополнен на {amount} рублей"
        )

    def withdraw(self, amount: float | int):
        """Снятие денег со счёта"""
        if amount > self.balance:
            print(
                f"Запрошенная для снятия сумма {amount} больше суммы на счёте {self.balance}"
            )
            return
        self.balance = self.balance - amount
        print(f"Сумма {amount} успешно снята, баланс счёта {self.balance}")

    def transfer_to(self, other_account, amount: float | int):
        """Переводит деньги на другой аккаунт"""
        if self.balance < amount:
            print(
                f"Запрошенная для перевода сумма {amount} больше суммы на счёте {self.balance}"
            )
            return
        self.balance = self.balance - amount
        other_account.balance += amount
        print(
            f"Сумма {amount} успешно переведена с аккаунта владельца {self.name} владельцу {other_account.name}"
        )

    def info(self):
        """Показывает информацию о счёте"""
        return f"Номер счёта: {self.account_number}, Владелец счёта: {self.name}, текущий баланс: {self.balance}"


try:
    account_1 = BankAccount("Сара Рабинович", "123456")
    account_2 = BankAccount("Моня Кацман", "456789")
    print(account_1.info())
    print(account_2.info())
    account_1.deposit(35000)
    account_2.deposit(10000)
    account_1.transfer_to(account_2, 15000)
    account_1.withdraw(123.55)
    print(account_1.info())
    print(account_2.info())
    print(BankAccount.get_accounts_created())
except ValueError as e:
    print(f"[Ошибка]: {e}")
