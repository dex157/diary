import PropTypes from 'prop-types'

export default class Task {
  static propType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    isRepeatable: PropTypes.bool.isRequired
  })
}
