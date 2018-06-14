import PropTypes from 'prop-types'
import Lesson from './lesson'

export default class DaySchedule {
  static propType = {
    date: PropTypes.instanceOf(Date).isRequired,
    lessons: PropTypes.arrayOf(PropTypes.shape(Lesson.propType)).isRequired
  }
}
