import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/landing page/Home'
import About from './components/About'
import News from './components/News'
import Navbar from './components/navbar/CustomNavBar'
// import Form from './components/Registration'

class App extends Component {
  render () {
    return (
      <Router>
        <div className=''>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/news' component={News} />
          {/* <Form /> */}
        </div>
      </Router>
    )
  }
}

export default App
