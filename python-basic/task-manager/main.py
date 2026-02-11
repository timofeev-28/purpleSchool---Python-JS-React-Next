import json
from shlex import split # разделяет введённые данные по кавычкам (title нужно вводить в кавычках)
from commands.help import help_command
from commands.add import add_command
from tasks.tasks import Task
from storage.file import save_tasks, load_tasks


def main():
    file_path = "tasks.json"
    tasks, next_id = load_tasks(file_path)
    print("Task менеджер. help - для справки")
    while True:
        try:
            raw = input("> ").strip()
            parts = split(raw)
            cmd, args = parts[0], parts[1:]
            match cmd:
                case "help":
                    help_command()
                case "add":
                    next_id = add_command(tasks, args, next_id)
                case "list":
                    print(tasks, next_id)
                case "remove":
                    pass
                case "edit":
                    pass
                case "tags":
                    pass
                case "exit":
                    save_tasks(file_path, tasks)
                    break
                case _:
                    print("Неизвестная команда")
        except KeyboardInterrupt:
            save_tasks(file_path, tasks)
            print("\nЗавершение приложения")
            break
        except Exception as e:
            save_tasks(file_path, tasks)
            print(f"[ERROR]: {e}")

if __name__ == "__main__":
    # main()

# ==================================
#  Запись и чтение файлов

    # r - чтение
    # w - запись
    # a -добавить
    # x - создание нового файла
    # b - бинарный файл
    # t - текстовый
    # + - открытие для чтения/записи

    # f = open("notes.txt", "w", encoding="utf-8")
    # f.write("первая строка\n")
    # f.write("вторая строка\n")
    # f.close()

    # with open("notes.txt", "w", encoding="utf-8") as f:
    #     f.write("Привет\n")
    #     f.write("Я записал")
    # print("Завершено")
# ======================================

    # res = json.dumps({"a": True, "b": [1, 2, 3]})
    # print(res)

    # with open("tasks.json", "w", encoding="utf-8") as f:
    #     json.dump({"id": 1, "title": "Task-1", "on": True}, f, ensure_ascii=False, indent=2)
# =======================================

# ЧТЕНИЕ ФАЙЛОВ
    with open("notes.txt", "r", encoding="utf-8") as f:
        # text = f.read()
        # print(text)

        # ЕСЛИ ЧИТАТЬ ПОСТРОЧНО
        for line in f:
            print(">", line.rstrip())

    # with open("tasks.json", "r", encoding="utf-8") as f:
    #     data = json.load(f)
    #     print(type(data))
