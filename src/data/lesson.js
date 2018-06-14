import PropTypes from 'prop-types'
import Task from './task'

export default class Lesson {
  static propType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    tasks: PropTypes.arrayOf(Task.propType).isRequired
  })
}
