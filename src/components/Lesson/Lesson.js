import React, { PureComponent } from 'react'
import { Lesson as LessonData } from 'data'
import moment from 'moment'
import PropTypes from 'prop-types'
import * as Styled from './Styles'

class Lesson extends PureComponent {
  static propTypes = { ...LessonData.propType, isLast: PropTypes.bool }
  static defaultProps = { isLast: false }
  render() {
    const { startTime, title, tasks, isLast } = this.props

    return (
      <Styled.LessonContainer>
        <Styled.StartTime>
          {startTime && moment(startTime).format('H:mm')}
        </Styled.StartTime>
        <Styled.Cell isLast={isLast}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Tasks>
            {tasks.map(({ title }) => title).join(', ')}
          </Styled.Tasks>
        </Styled.Cell>
      </Styled.LessonContainer>
    )
  }
}

export default Lesson
