import PropTypes from 'prop-types'

export default class Task {
  static propType = {
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    isRepeatable: PropTypes.bool.isRequired
  }
}
