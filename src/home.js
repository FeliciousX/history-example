import {div} from '@cycle/dom'
import xs from 'xstream'
import delay from 'xstream/extra/delay'

export default function Home (sources) {
  const vtree$ = xs.of(
    div('Im at home...')
  )
  const sinks = {
    DOM: vtree$,
    history: xs.of('/about').compose(delay(2000))
  }
  return sinks
}
