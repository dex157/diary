import PropTypes from 'prop-types'
import Task from './Task'
import moment from 'moment'

export default class Lesson {
  static propType = {
    title: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propType)).isRequired
  }

  static prepeareLessonsForRender(lessons) {
    const result = []
    const sortedLessons = [...lessons].sort((aLesson, bLesson) => {
      if (!aLesson.startTime) {
        return 1
      } else if (!bLesson.startTime) {
        return -1
      }
      const a = moment(aLesson.startTime)
      const b = moment(bLesson.startTime)
      return moment.min(a, b) === a ? -1 : 1
    })

    if (isAllLessonsWithoutTime(lessons)) {
      result.push({
        isEmpty: true,
        lesson: { title: `8:00 до 23:00` }
      })
    }

    sortedLessons.forEach((lesson, index, array) => {
      if (index === 0) {
        if (lesson.startTime && lesson.startTime.getHours() > 8) {
          result.push({
            isEmpty: true,
            lesson: { title: `8:00 до ${lesson.startTime.getHours()}:00` }
          })
        }
        result.push({ isEmpty: false, lesson })
      } else {
        const prevLesson = array[index - 1]
        if (lesson.startTime != null) {
          if (
            lesson.startTime.getHours() - prevLesson.endTime.getHours() >=
            1
          ) {
            result.push({
              isEmpty: true,
              lesson: {
                title: `${prevLesson.endTime.getHours()}:00 до ${lesson.startTime.getHours()}:00`
              }
            })
          }
        } else {
          if (prevLesson.endTime != null) {
            result.push({
              isEmpty: true,
              lesson: {
                title: `${prevLesson.endTime.getHours()}:00 до 23:00`
              }
            })
          }
        }
        result.push({ isEmpty: false, lesson })
      }
    })

    return result
  }
}

function isAllLessonsWithoutTime(lessons) {
  return !lessons.some(lesson => lesson.startTime != null)
}
