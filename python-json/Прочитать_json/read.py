import json

filename = "config.json"

def read_config(file: str) -> None:
    try:
        with open(file, "r", encoding="utf-8") as f:
            data = json.load(f)
            print(data.get('host'))
            print(data.get('port'))
            print(data.get('debug'))
    except FileNotFoundError:
        print("Файл не найден")
    except json.JSONDecodeError as e:
        print(f"[WARN] Повреждённый JSON ({file}): {e}")

read_config(filename)
