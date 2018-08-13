import React, { Component } from 'react'
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Sidebar from '../navbar/Sidebar.jsx'
import './CustomNavbar.css'

export default class CustomNavBar extends Component {
  render () {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>

          <Navbar.Brand>
            <Sidebar id='sidebar' />
            <Image className='wire_logo'src='assets/img/wire_logo.svg' />
            <Link to='/'>  <Image src='assets/img/logo.svg'className='navbar__logo' /> </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={0} componentClass={Link} href='/'to='/'>
                Home
            </NavItem>
            <NavItem eventKey={1} componentClass={Link} href='/about'to='/about'>
                About
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href='/news'to='/news'>
                News
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href='/news'to='/news'>
                Register
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
