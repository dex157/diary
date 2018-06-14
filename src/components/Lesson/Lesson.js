import React, { PureComponent } from 'react'
import { Lesson as LessonData } from 'data'
import styled from 'styled-components'
import moment from 'moment'
import PropTypes from 'prop-types'

class Lesson extends PureComponent {
  static propTypes = { ...LessonData.propType, isLast: PropTypes.bool }
  static defaultProps = { isLast: false }
  render() {
    const { startTime, title, tasks, isLast } = this.props

    return (
      <LessonContainer>
        <StartTime>{moment(startTime).format('H:mm')}</StartTime>
        <Cell isLast={isLast}>
          <Title>{title}</Title>
          <Tasks>{tasks.map(({ title }) => title).join(', ')}</Tasks>
        </Cell>
      </LessonContainer>
    )
  }
}

const LessonContainer = styled.div`
  display: flex;
`

const StartTime = styled.p`
  width: ${p => p.theme.lesson.timeColumnWidth};
  text-align: right;
  color: #b2b2b2;
  font-size: 13px;
  font-weight: 300;
  padding-right: 7px;
  line-height: 35px;
`

const Cell = styled.div`
  border: 1px solid #cccccc;
  border-bottom-width: ${p => (p.isLast ? 1 : 0)}px;
  width: calc(100% - ${p => p.theme.lesson.timeColumnWidth});
  height: 35px;
  line-height: 35px;
  padding-left: 7px;
`

const Title = styled.p`
  width: 150px;
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
`

const Tasks = styled.p`
  display: inline-block;
  vertical-align: top;
`

export default Lesson
