import React, { PureComponent } from 'react'
import styled from 'styled-components'

class Diary extends PureComponent {
  render() {
    return (
      <App>
        <Header>
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload. asdsdasdaasda
        </Intro>
      </App>
    )
  }
}

const App = styled.div`
  text-align: center;
`
const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Intro = styled.p`
  font-size: large;
`

export default Diary
