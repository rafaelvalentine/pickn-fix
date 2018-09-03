import React, { Component } from 'react'
import { Button, Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeviceForm from '../Form/Device-Form.jsx'

import './login.css'
import Sidebar from '../../sidebar/Sidebar'

export default class Login extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      show: false,
      username: '',
      password: ''
    }
  }
  handleModal (e) {
    e.preventDefault()
    this.setState(previousState => {
      show: !previousState.show
    })
  }

  redirectUser () {
    window.location.href = '/about'
  }

  handleClose () {
    this.setState({ show: false })
    // DeviceForm.setState({shows: true})
    // document.getElementById('login__modal').style.display = 'none'
  }

  handleShow () {
    // var sideNav = document.getElementById('mysidenav')
    // var sideNavContent = document.getElementById('mysidebarprimarycontent')
    // var button2 = document.getElementById('Aside__Button2')
    // var body = document.getElementById('main')
    // var registerSideNav = document.getElementById('registersidenav')
    // sideNav.style.width = '0'
    // sideNavContent.style.width = '0'
    // body.style.overflow = 'visible'
    // button2.style.visibility = 'hidden'
    // registerSideNav.style.width = '0'
    this.setState({ show: true })
    console.log(this.state)
    // console.log(Sidebar.state.show)
  }
  getValidationState () {
    const length = this.state.username.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }
  getValidationStatePassword () {
    // get paragraph tag
    const passwordText = document.getElementById('passwordtext')

    // setting the values for password  strength color and strength text
    var strText = ['weak', 'average', 'strong', 'very strong']
    var strColor = ['#c00', '#f80', '#bada55', '#080']

    // strength state
    const strength = this.state.password

    // checking for uppercase letters
    var upperCase = strength.match(/[A-Z]/g)
    upperCase = (upperCase && upperCase.length || 0)

    // checking for numbers
    var numberPresent = strength.match(/\d/g)
    numberPresent = (numberPresent && numberPresent.length || 0)

    // checking for other characters
    var notAletter = strength.match(/\W/g)
    notAletter = (notAletter && notAletter.length || 0)

    // overall strength of the password
    var fullStrength = strength.length + upperCase + (numberPresent * 2) + (notAletter * 3)
    fullStrength = Math.min(Math.floor(fullStrength / 10), 3)

    if (fullStrength === 3) {
      return passwordText.textContent = strText[fullStrength], passwordText.style.color = strColor[fullStrength], 'success'
    } else if (fullStrength === 2) {
      return passwordText.textContent = strText[fullStrength], passwordText.style.color = strColor[fullStrength], 'warning'
    } else if (fullStrength === 1) {
      return passwordText.textContent = strText[fullStrength], passwordText.style.color = strColor[fullStrength], 'error'
    }
    return null
		 }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const {username, password} = this.state
    return (
      <div>
        <p onClick={this.handleShow}>Register a new Device</p>
        <Modal show={this.state.show} onHide={this.handleClose} id='login__modal' className='login__modal'>
          <div>
            <Modal.Header closeButton className='login__modal--header'>
              <h3 className='title__text text-center'>Register a device</h3>
              <hr className='underrule' />
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup
                  controlId='formBasicText'
                  validationState={this.getValidationState()}>
                  <h3 className='username text-center'>Username</h3>
                  <FormControl
                    type='text'
                    value={username}
                    name='username'
                    placeholder=''
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId='formPassowrd'
                  validationState={this.getValidationStatePassword()}>
                  <h3 className='password text-center'>Password</h3>
                  <FormControl
                    type='password'
                    value={password}
                    name='password'
                    placeholder=''
                    onChange={this.handleChange} />
                  <p id='passwordtext' />
                </FormGroup>
                {/* <DeviceForm onHide={this.handleClose}onClick={this.handleShow}onClick={this.handleClose}/> */}
                <Button className='continue__modal--button'onClick={this.handleClose}>
                  <DeviceForm />
                </Button>
                {/* <Button className='continue__modal--button' onClick={this.handleShow}></Button> */}
              </form>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    )
  }
}
