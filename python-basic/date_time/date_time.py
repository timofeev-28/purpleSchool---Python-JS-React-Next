import datetime
from zoneinfo import ZoneInfo

now = datetime.datetime.now()
print(now)
today = datetime.date.today()
print(today)
current_time = now.time()
print(current_time)

d = datetime.date(2025, 11, 27)
print(d.weekday())
print(d)
t = datetime.time(12, 26, 28)
print(t)
dt = datetime.datetime(2025, 11, 27, 12, 26, 28)
print(dt)

# форматирование даты и времени для вывода

# для вывода в виде строки
print(now.strftime("%d/%m/%Y %H:%M:%S"))

# для принятия строки и перевода в данные
s = "27/11/2025 13:50"
dt = datetime.datetime.strptime(s, "%d/%m/%Y %H:%M")
print(dt)

# разница между датами
new_year = datetime.date(2026, 1, 1)
today = datetime.date.today()
diff = new_year - today
print(diff.days)

# какая дата будет через несколько дней
next_week = today + datetime.timedelta(days=27) #weeks=1
print(next_week)

# какая дата была несколько дней назад
last_month = today - datetime.timedelta(days=27) #weeks=1
print(last_month)


# СРАВНЕНИЕ ДАТ
d1 = datetime.date(2025, 9 ,17)
d2 = datetime.date(2025, 12 ,31)
print(d1 < d2)
print(d1 == d2)
print(d1 > d2)
deadline = datetime.datetime(2025, 12, 20, 18, 0, 0)
if now < deadline:
    print("Ещё успеваем")
else:
    print("Не успеваем")


# ТАЙМЗОНЫ
now_utc = datetime.datetime.now(ZoneInfo("UTC"))
print(now)
print(now_utc)
now_ny = datetime.datetime.now(ZoneInfo("America/New_York"))
print(now_ny)

# назначена встреча по Москве
meeting = datetime.datetime(2025, 12, 31, 19, 0, tzinfo=ZoneInfo("Europe/Moscow"))
print(meeting)
# Во сколько эта встреча будет по Нью-Йорку
meeting_ny = meeting.astimezone(ZoneInfo("America/New_York"))
print(meeting_ny)
