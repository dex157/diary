import React from 'react'
import { storiesOf } from '@storybook/react'
import DaySchedule from './DaySchedule'
import { WithFigma } from 'storybook-addon-figma'

const now = new Date()

storiesOf('DaySchedule', module).add('default', () => (
  <WithFigma
    url={
      'https://www.figma.com/file/evOdDqrPG9QLznbxSGa8sB/%D0%9F%D0%A2%D0%A3-1337-(Copy)?node-id=34%3A121'
    }
  >
    <DaySchedule date={now} lessons={lessonsMock1} />
  </WithFigma>
))
storiesOf('DaySchedule', module).add('with lessons without dates', () => (
  <WithFigma
    url={
      'https://www.figma.com/file/evOdDqrPG9QLznbxSGa8sB/%D0%9F%D0%A2%D0%A3-1337-(Copy)?node-id=34%3A121'
    }
  >
    <DaySchedule date={now} lessons={lessonsMock2} />
  </WithFigma>
))

now.setMinutes(0)
now.setSeconds(0)
now.setMilliseconds(0)

const lessonsMock1 = [
  {
    title: 'Алгебра',
    startTime: new Date(now.setHours(9)),
    endTime: new Date(now.setHours(10)),
    tasks: [
      { title: '№313', isComplete: false, isRepeatable: true },
      { title: '№231', isComplete: false, isRepeatable: true }
    ]
  },
  {
    title: 'Информатика',
    startTime: new Date(now.setHours(10)),
    endTime: new Date(now.setHours(11)),
    tasks: [
      { title: '№313', isComplete: false, isRepeatable: true },
      { title: '№231', isComplete: false, isRepeatable: true },
      { title: '№311', isComplete: false, isRepeatable: true }
    ]
  },
  {
    title: 'Английский',
    startTime: new Date(now.setHours(12)),
    endTime: new Date(now.setHours(13)),
    tasks: []
  },
  {
    title: 'Обществознание',
    startTime: new Date(now.setHours(14)),
    endTime: new Date(now.setHours(15)),
    tasks: [{ title: '§341', isComplete: false, isRepeatable: true }]
  },
  {
    title: 'Русский',
    startTime: null,
    endTime: null,
    tasks: []
  },
  {
    title: 'Русский',
    startTime: null,
    endTime: null,
    tasks: []
  }
]
const lessonsMock2 = [
  {
    title: 'Алгебра',
    startTime: null,
    endTime: null,
    tasks: [
      { title: '№313', isComplete: false, isRepeatable: true },
      { title: '№231', isComplete: false, isRepeatable: true }
    ]
  },
  {
    title: 'Информатика',
    startTime: null,
    endTime: null,
    tasks: [
      { title: '№313', isComplete: false, isRepeatable: true },
      { title: '№231', isComplete: false, isRepeatable: true },
      { title: '№311', isComplete: false, isRepeatable: true }
    ]
  },
  {
    title: 'Английский',
    startTime: null,
    endTime: null,
    tasks: []
  },
  {
    title: 'Обществознание',
    startTime: null,
    endTime: null,
    tasks: [{ title: '§341', isComplete: false, isRepeatable: true }]
  },
  {
    title: 'Русский',
    startTime: null,
    endTime: null,
    tasks: []
  },
  {
    title: 'Русский',
    startTime: null,
    endTime: null,
    tasks: []
  }
]
