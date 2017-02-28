import {div} from '@cycle/dom'
import xs from 'xstream'
import delay from 'xstream/extra/delay'

export default function About (sources) {
  const vtree$ = xs.of(
    div('This is about cycle/history')
  )
  const sinks = {
    DOM: vtree$,
    history: xs.of('/').compose(delay(2000))
  }
  return sinks
}
