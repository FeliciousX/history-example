import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHistoryDriver} from '@cycle/history'
import switchPath from 'switch-path'
import {App} from './app'

const main = App

const drivers = {
  DOM: makeDOMDriver('#app'),
  history: makeHistoryDriver(switchPath),
  debug: s => s.addListener({next: console.log})
}

run(main, drivers)
