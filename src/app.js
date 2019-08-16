import React, { Fragment } from 'react'

import { Reset, Body } from './global.styled'
import { MainContainer } from './app.styled'

import { Header } from './components/organism/header'

// import { API } from './utils/api'

function App() {
  return (
    <Fragment>
      <Reset />
      <Body />
      <MainContainer>
        <Header />
      </MainContainer>
    </Fragment>
  )
}

export default App
