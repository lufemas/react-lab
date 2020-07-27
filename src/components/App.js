import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Products from '../routes/Products'

import '../css/jr.css'

export default function App(){

  return(
    <Router>

      <Route path="/" exact>
        <Products/>
      </Route>

    </Router>
  )
}