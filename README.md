# Дневник для ПТУ 1337

- Проект без редакса, работаем с контекстом
- Запись стрима будет
- Записывайтесь на курс [react.js](https://loftschool.com/course/react) в
  loftscool
- Подход разработки **component first**
- Переосмысление [bem](https://ru.bem.info/methodology/) с css-in-js

---

В проекте используются:

- create-react-app
- styled-components
- react.js
- moment.js

---

Структура компонент:

```
Diary:
- Header:
  - Date

- PageFolds:
  - Date
  - LeftFold
  - RightFold

- PagePaginations:
  - LeftArrow
  - RightArrow
  - Paginator

PageFold:
- DaySchedules

DaySchedule:
- Date
- Lessons

Lesson:
- Title
- Tasks
- Time

Task:
- Title
- isComplete
```

---

Структура данных:

```
Diary:
- Weeks

Weeks:
- Days

Day:
- Date
- Lessons

Lesson:
- Title
- StartTime
- EndTime
- Tasks

Task:
- Title
- isComplete
- isRepeatable
```
