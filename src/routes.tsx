import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

import { Home } from 'pages/Home'
import { Comics } from 'pages/Comics'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="comics/:id" element={<Comics />} />
    </Switch>
  )
}

export default Routes
