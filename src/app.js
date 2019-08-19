import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Reset, Body } from './global.styled'

import { Login } from './components/modules/login'
import { Search } from './components/modules/search'

// import { API } from './utils/api'

function App() {
  return (
    <Fragment>
      <Reset />
      <Body />
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/search/:type?/:q?/:albums?/:tracks?" exact component={Search} />
      </BrowserRouter>
    </Fragment>
  )
}

export default App
