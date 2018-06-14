import React, { PureComponent } from 'react'
import { DaySchedule as DayScheduleData } from 'data'
import styled from 'styled-components'
import moment from 'moment'
import { capitalize } from 'helpers'
import LessonComponent from 'components/Lesson'

class DaySchedule extends PureComponent {
  static propTypes = DayScheduleData.propType

  static defaultProps = {
    lessons: []
  }

  render() {
    const { date, lessons } = this.props

    return (
      <DayScheduleContainer>
        <Header>
          <WeekDay>{capitalize(moment(date).format('dddd'))}</WeekDay>
          <Date>{moment(date).format('D MMMM')}</Date>
        </Header>
        <Lessons>
          {lessons.map((lesson, index, array) => (
            <LessonComponent
              key={index}
              {...lesson}
              isLast={index === array.length - 1}
            />
          ))}
        </Lessons>
      </DayScheduleContainer>
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
