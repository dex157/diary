import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.header`
  align-items: center;
  background-color: #000000;
  display: flex;
  height: ${p => p.theme.headerHeight};
  justify-content: center;
  width: 100%;
`

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.241177px;
  margin: 0;
  padding: 0;
`

class Header extends PureComponent {
  static propTypes = {
    dateString: PropTypes.string
  }

  state = {
    titleText: this.props.dateString
      ? `Дневник за ${this.props.dateString}`
      : 'Дневник'
  }

  componentDidMount() {
    this.setPageTitle()
  }

  componentDidUpdate() {
    this.setPageTitle()
  }

  setPageTitle() {
    const { titleText } = this.state
    const pageTitle = document.querySelector('title')
    pageTitle.innerHTML = titleText
  }

  render() {
    const { titleText } = this.state

    return (
      <Container>
        <HeaderTitle>{titleText}</HeaderTitle>
      </Container>
    )
  }
}

export default Header
