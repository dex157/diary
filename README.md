# Проект дневника для ПТУ 1337

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
