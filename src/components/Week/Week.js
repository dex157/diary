import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Week as WeekData } from 'data'
import DaySchedule from 'components/DaySchedule'

class Week extends PureComponent {
  static propTypes = WeekData.propType
  static defaultProps = {
    daySchedules: []
  }
  render() {
    const { daySchedules } = this.props
    return (
      <WeekContainer>
        <Fold>
          <FoldContent>
            {daySchedules
              .slice(0, 3)
              .map((daySchedule, index) => (
                <DaySchedule {...daySchedule} key={index} />
              ))}
          </FoldContent>
        </Fold>
        <Delimeter />
        <Fold>
          <FoldContent>
            {daySchedules
              .slice(3)
              .map((daySchedule, index) => (
                <DaySchedule {...daySchedule} key={index} />
              ))}
          </FoldContent>
        </Fold>
      </WeekContainer>
    )
  }
}

const WeekContainer = styled.main`
  background-color: #fff;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-content: stretch;
`

const Delimeter = styled.div`
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #f3f3f3 33%,
    #dadada 50.95%,
    #f3f3f3 67.66%,
    #ffffff 100%
  );
  height: 100%;
  width: 16px;
`

const Fold = styled.div`
  flex: 1;
  position: relative;
`

const FoldContent = styled.div`
  height: 100%;
  overflow-y: auto;
  position: absolute;
  width: 100%;
`

export default Week
