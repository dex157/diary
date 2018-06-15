import PropTypes from 'prop-types'

export default class {
  static propType = {
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    isRepeatable: PropTypes.bool.isRequired
  }
}
