import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './Styles'

class Lesson extends PureComponent {
  static propTypes = {
    isLast: PropTypes.bool,
    title: PropTypes.string.isRequired
  }
  static defaultProps = { isLast: false }
  render() {
    const { isLast, title } = this.props
    return (
      <Styled.LessonContainer>
        <Styled.StartTime />
        <Styled.Cell isLast={isLast}>
          <Styled.Title fullWidth>{`Окно c ${title}`}</Styled.Title>
        </Styled.Cell>
      </Styled.LessonContainer>
    )
  }
}

export default Lesson
