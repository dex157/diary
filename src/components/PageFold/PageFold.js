import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class PageFold extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({}))
  }
  render() {
    return (
      <PageFoldContainer>
        <Fold>
          <FoldContent />
        </Fold>
        <Delimeter />
        <Fold>
          <FoldContent />
        </Fold>
      </PageFoldContainer>
    )
  }
}

const PageFoldContainer = styled.main`
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

export default PageFold
