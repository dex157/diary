import React, { PureComponent } from 'react'
import { DaySchedule as DayScheduleData, Lesson } from 'data'
import styled from 'styled-components'
import moment from 'moment'
import { capitalize } from 'helpers'
import LessonComponent, {
  EmptyLesson as EmptyLessonComponent
} from 'components/Lesson'

class DaySchedule extends PureComponent {
  static propTypes = DayScheduleData.propType

  static defaultProps = {
    lessons: []
  }

  render() {
    const { date } = this.props

    return (
      <DayScheduleContainer>
        <Header>
          <WeekDay>{capitalize(moment(date).format('dddd'))}</WeekDay>
          <Date>{moment(date).format('D MMMM')}</Date>
        </Header>
        <Lessons>{this.renderLessons()}</Lessons>
      </DayScheduleContainer>
    )
  }

  renderLessons() {
    const { lessons } = this.props

    return Lesson.prepeareLessonsForRender(lessons).map(
      ({ lesson, isEmpty }, index, array) =>
        React.createElement(isEmpty ? EmptyLessonComponent : LessonComponent, {
          key: index,
          isLast: index === array.length - 1,
          ...lesson
        })
    )
  }
}

const DayScheduleContainer = styled.div`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: ${p => p.theme.lesson.timeColumnWidth};
  padding-bottom: 6px;
`

const WeekDay = styled.span`
  font-weight: 700;
`

const Date = styled.span`
  font-weight: 300;
  color: #b2b2b2;
`

const Lessons = styled.div``

export default DaySchedule
