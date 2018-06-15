import PropTypes from 'prop-types'
import DaySchedule from './DaySchedule'

export default class {
  static propType = {
    date: PropTypes.instanceOf(Date).isRequired,
    daySchedules: PropTypes.arrayOf(PropTypes.shape(DaySchedule)).isRequired
  }
}
