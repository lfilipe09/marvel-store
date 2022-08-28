import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

import { Home } from 'pages/Home'
import { Comics } from 'pages/Comics'
import { Empty } from 'pages/Empty'
import Login from 'pages/Login'
import Signup from 'pages/Signup'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="comics/:id/:name" element={<Comics />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Empty />} />
    </Switch>
  )
}

export default Routes
