import React from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Contactus from './Contactus'

const Routing = () => {
  return (
    <div>
        <Router>
        <Route path="/contact" element={<Contactus/>} />
        </Router>
    </div>
  )
}

export default Routing