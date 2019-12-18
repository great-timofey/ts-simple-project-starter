import React from 'react'
import ReactDOM from 'react-dom'

const chained = { one: { two: 2 } } as any

const App = () => (
  <h1>
    Hello {chained?.one?.two} & {chained?.one.three?.four}!
  </h1>
)

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('root'))
