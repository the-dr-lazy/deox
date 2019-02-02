import React from 'react'

import { CategoryList } from './components'
import { SnackbarContainer } from './containers'

export function App() {
  return (
    <div className="App">
      <div className="App__introduction">
        <div className="App__brand">
          <h1 className="heading-1">Tasks</h1>
          <p className="paragraph">
            © 2018{' '}
            <a
              href="https://github.com/thebrodmann/deox"
              target="_blank"
              className="anchor"
            >
              Deox
            </a>
          </p>
        </div>
        <div className="App__description">
          <p className="paragraph">Hello!</p>
          <p className="paragraph">
            Here is a list of tasks that you can do. Also you can add a task or
            just remove tasks that seems useless.
          </p>
          <p className="paragraph">Be happy, it’s the purpose of our lives.</p>
        </div>
        <div className="App__categories">
          <h2 className="heading-2">Categories</h2>
          <CategoryList />
        </div>
      </div>
      <div className="App__header" />
      <main className="App__main" />
      <SnackbarContainer />
    </div>
  )
}
