import React, { PureComponent, Fragment } from 'react'
import Header from 'components/Header'
import Week from 'components/Week'
import styled from 'styled-components'

class Diary extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <WeekWrapper>
          <Week />
        </WeekWrapper>
      </Fragment>
    )
  }
}

const WeekWrapper = styled.div`
  background: #000;
  width: 100%;
  height: calc(100% - ${p => p.theme.headerHeight});
  padding: 0 10px 10px;
`

export default Diary
