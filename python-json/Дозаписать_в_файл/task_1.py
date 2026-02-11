import json

text_to_append = "Дополнительная запись в журнале"
filename = "log.txt"

def save_file(text: str, file: str) -> None:
    with open(file, "a", encoding="utf-8") as f:
        f.write(text + "\n")

save_file(text_to_append, filename)
