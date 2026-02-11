from shlex import split
from commands.help import help_command
from orders import list_orders, remove_order, edit_order
from helpers.get_args import get_args
from utils.orders_stor import ORDER_ID


def main():
    print("Менеджер заказов. help - для справки")
    while True:
        raw = input("> ").strip()
        parts = split(raw)
        cmd, args = parts[0], parts[1:]
        try:
            match cmd:
                case "help":
                    help_command()
                case "add":
                    get_args(args)
                    print(f"Заказ сохранён")
                case "list":
                    print(list_orders())
                case "edit":
                    edit_order(args)
                    print("Заказ изменён")
                case "remove":
                    remove_order(args)
                    print("Заказ удалён")
                case "exit":
                    break
                case _:
                    print("Неизвестная команда")
        except KeyboardInterrupt:
            print("\nЗавершение приложения")
            break
        except Exception as e:
            print(f"[ERROR]: {e}")


if __name__ == "__main__":
    main()
