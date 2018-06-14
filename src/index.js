import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Diary from 'components/Diary'
import registerServiceWorker from './registerServiceWorker'
import moment from 'moment'
moment.locale('ru')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Diary />
  </ThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
