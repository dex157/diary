import styled from 'styled-components'

export const LessonContainer = styled.div`
  display: flex;
`

export const StartTime = styled.p`
  width: ${p => p.theme.lesson.timeColumnWidth};
  text-align: right;
  color: #b2b2b2;
  font-size: 13px;
  font-weight: 300;
  padding-right: 7px;
  line-height: 35px;
`

export const Cell = styled.div`
  border: 1px solid #cccccc;
  border-bottom-width: ${p => (p.isLast ? 1 : 0)}px;
  width: calc(100% - ${p => p.theme.lesson.timeColumnWidth});
  height: 35px;
  line-height: 35px;
  padding-left: 7px;
`

export const Title = styled.p`
  width: ${p => (p.fullWidth ? '100%' : '150px')};
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: -1px;
  color: ${p => (p.fullWidth ? '#B2B2B2' : '#000')};
`

export const Tasks = styled.p`
  display: inline-block;
  vertical-align: top;
`
