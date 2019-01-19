import React, { Component } from 'react'
import { Button, Glyphicon, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Register from './Registration-SideNav/RegisterSideNav.jsx'
import './sidebar.css'

export default class Sidebar extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: true,
      glyph: 'menu-hamburger'
    }
  }

  handleClose () {
    this.setState({ show: false })
  }
  handleShow () {
    var sideNav = document.getElementById('mysidenav')
    var sideNavContent = document.getElementById('mysidebarprimarycontent')
    var button2 = document.getElementById('Aside__Button2')
    var body = document.getElementById('main')
    var registerSideNav = document.getElementById('registersidenav')

    if (this.state.show) {
      // open sideNav
      sideNav.style.width = '100%'
      sideNavContent.style.width = '85%'
      body.style.overflow = 'hidden'
      sideNav.style.backgroundColor = 'rgba(0,0,0,0.75)'
      sideNavContent.style.backgroundColor = '#fff'

      // button click open
      button2.style.backgroundColor = '#1c92d2'
      button2.style.visibility = 'visible'
      console.log('it works')
      this.setState({ show: false, glyph: 'remove' })
    } else {
      this.setState({ show: true, glyph: 'menu-hamburger' })

      // close sidenav
      sideNav.style.width = '0'
      sideNavContent.style.width = '0'
      body.style.overflow = 'visible'
      // button click close
      button2.style.visibility = 'hidden'
      registerSideNav.style.width = '0'
      console.log('it was false', this.setState())
    }
  }

  render () {
    return (
      <div>

        <aside id='mysidenav' className='sidenav'>
          <div id='mysidebarprimarycontent' className='sidenav'>
            <ul className='mysidebarprimarycontent__list'>
              <li className='list__logo'> <Link to='/'>  <Image src='assets/img/logo.svg'className='navbar__logo' /> </Link></li>
              <li className='list__item home'>Home</li>
              <li className='list__item'>Services > </li>
              <li className='list__item'><a href='#about'onClick={this.handleShow}>About Pick n' Fix</a></li>
              <li className='list__item'><Register /></li>
            </ul>
          </div>
          <button id='Aside__Button2'className='aside__button2'>
            <Glyphicon onClick={this.handleShow} glyph={this.state.glyph} />
          </button>
        </aside>
        <button id='Aside__Button'className='aside__button'>
          <Glyphicon onClick={this.handleShow} glyph='menu-hamburger' />
        </button>
      </div>
    )
  }
}
