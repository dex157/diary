import PropTypes from 'prop-types'
import DaySchedule from './DaySchedule'

export default class Week {
  propType = {
    date: PropTypes.instanceOf(Date),
    daySchedules: PropTypes.arrayOf(PropTypes.shape(DaySchedule))
  }
}
