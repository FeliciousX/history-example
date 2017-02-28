import {div} from '@cycle/dom'
import xs from 'xstream'
import delay from 'xstream/extra/delay'

import Home from './home';
import About from './about';

const routes = {
  "/": Home,
  "/about": About
};

export function App (sources) {
  const component$ = sources.history.map(route => routes[route.pathname])
  const sinks$ = component$.map(component => component(sources))

  const vtree$ = sinks$.map(sinks => sinks.DOM).flatten()
  const history$ = sinks$.map(sinks => sinks.history).flatten()

  const sinks = {
    DOM: vtree$,
    history: history$.startWith('/')
  }
  return sinks
}
