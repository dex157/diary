import PropTypes from 'prop-types'
import Task from './task'

export default class Lesson {
  static propType = {
    title: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propType)).isRequired
  }
}

let now = new Date()
now.setMinutes(0)
now.setSeconds(0)
now.setMilliseconds(0)

export const lessonsMock = [
  {
    title: 'Обществознание',
    startTime: new Date(now.setHours(8)),
    endTime: new Date(now.setHours(9)),
    tasks: [{ title: '§341', isComplete: false, isRepeatable: true }]
  },
  {
    title: 'Алгебра',
    startTime: new Date(now.setHours(9)),
    endTime: new Date(now.setHours(10)),
    tasks: [
      { title: '№313', isComplete: false, isRepeatable: true },
      { title: '№231', isComplete: false, isRepeatable: true }
    ]
  },
  {
    title: 'Информатика',
    startTime: new Date(now.setHours(10)),
    endTime: new Date(now.setHours(11)),
    tasks: [
      { title: '№313', isComplete: false, isRepeatable: true },
      { title: '№231', isComplete: false, isRepeatable: true },
      { title: '№311', isComplete: false, isRepeatable: true }
    ]
  },
  {
    title: 'Английский',
    startTime: new Date(now.setHours(12)),
    endTime: new Date(now.setHours(13)),
    tasks: []
  }
]
