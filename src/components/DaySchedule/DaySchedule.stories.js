import React from 'react'
import { storiesOf } from '@storybook/react'
import DaySchedule from './DaySchedule'
import { WithFigma } from 'storybook-addon-figma'
import { lessonsMock } from 'data'

const now = new Date()

storiesOf('DaySchedule', module).add('default', () => (
  <WithFigma
    url={
      'https://www.figma.com/file/evOdDqrPG9QLznbxSGa8sB/%D0%9F%D0%A2%D0%A3-1337-(Copy)?node-id=34%3A121'
    }
  >
    <DaySchedule date={now} lessons={lessonsMock} />
  </WithFigma>
))
