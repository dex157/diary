# Дневник для ПТУ 1337

- Проект без редакса, работаем с контекстом реакта
- Запись стрима будет
- Исходники будут
- Подход разработки **component first**
- Переосмысление [bem](https://ru.bem.info/methodology/) с css-in-js
- Записывайтесь на курс
  [react.js в loftscool](https://loftschool.com/course/react)

---

В проекте используются:

- [react.js](https://reactjs.org/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [styled-components](https://www.styled-components.com/)
- [storybook](https://storybook.js.org/)
- [husky](https://github.com/typicode/husky)
- [prettier](https://prettier.io/)
- [moment.js](https://momentjs.com/)
- [circleci](http://circleci.com/)

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
