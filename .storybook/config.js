import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import theme from '../src/theme'
import { ThemeProvider } from 'styled-components'
import '../src/index.css'

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
configure(loadStories, module)
