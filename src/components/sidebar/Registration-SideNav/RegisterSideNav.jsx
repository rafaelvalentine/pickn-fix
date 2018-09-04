import React, { Component } from 'react'
import {Button, Glyphicon, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Login from '../../Register-Device/Login/Login'
import './registerSideNav.css'

export default class RegisterSideNav extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      register: true
    }
  }

  handleClose () {
    this.setState({ show: false })
  }
  handleShow () {
    var registerSideNav = document.getElementById('registersidenav')
    var sideNavContent = document.getElementById('mysidebarprimarycontent')
    var button2 = document.getElementById('Aside__Button2')
    var body = document.getElementById('main')

    if (this.state.register) {
      // open sideNav
      registerSideNav.style.width = '85%'
      sideNavContent.style.width = '0'
      body.style.overflow = 'hidden'
      registerSideNav.style.backgroundColor = '#fff'
      this.setState({ register: false })
      console.log('from registersidenav it is set to FALSE now ', this.state.register)
    } else {
      // close sidenav
      registerSideNav.style.width = '0'
      sideNavContent.style.width = '85%'
      body.style.overflow = 'visible'
      this.setState({ register: true })
      console.log('from registersidenav it is set to TRUE now', this.state.register)
    }
  }

  render () {
    return (
      <div>
        <aside id='registersidenav' className='sidenav'>
          <div id='registersidenavprimarycontent' className=''>
            <ul id='registersidenavprimarycontent__list'>
              <li className='list__item home' onClick={this.handleShow}>
                <span className='home__glyph'><Glyphicon glyph='chevron-left' /></span>
                <span className='home__register'>Register</span>
              </li>
              <li className='list__item'> Register as a seller</li>
              <li className='list__item'><Login /></li>
            </ul>
          </div>
        </aside>
        <p id='registersidenav__p'className='' onClick={this.handleShow}>
        Register <span><Glyphicon glyph='chevron-right' /></span>
        </p>
      </div>
    )
  }
}
