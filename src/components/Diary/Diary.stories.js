import React from 'react'
import { storiesOf } from '@storybook/react'
import Diary from './Diary'
import { WithFigma } from 'storybook-addon-figma'

storiesOf('Diary', module).add('default', () => (
  <WithFigma
    url={
      'https://www.figma.com/file/evOdDqrPG9QLznbxSGa8sB/%D0%9F%D0%A2%D0%A3-1337-(Copy)?node-id=34%3A4'
    }
  >
    <Diary />
  </WithFigma>
))
