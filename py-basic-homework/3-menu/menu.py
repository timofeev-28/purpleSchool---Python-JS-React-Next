category = input("Выберите категорию - напиток, суп, десерт: ").lower()
res = ""

if category == "напиток":
    drink = input("Выберите - чай, кофе или сок: ").lower()
    match drink:
        case "чай":
            res = 100
        case "кофе":
            res = 120
        case "сок":
            res = 130
        case _:
            res = "Такого не держим"
elif category == "суп":
    soap = input("Выберите - борщ, щи или суп-пюре: ").lower()
    match soap:
        case "борщ":
            res = 220
        case "щи":
            res = 230
        case "суп-пюре":
            res = 250
        case _:
            res = "Такого не держим"
elif category == "десерт":
    dessert = input("Выберите - торт, мороженое или фрукты: ").lower()
    match dessert:
        case "торт":
            res = 280
        case "мороженое":
            res = 120
        case "фрукты":
            res = 250
        case _:
            res = "Такого не держим"
else:
    res = "нет такой категории в наличии"

print(res)
