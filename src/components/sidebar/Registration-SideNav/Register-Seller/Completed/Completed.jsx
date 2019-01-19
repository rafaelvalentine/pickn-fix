import React, { Component } from 'react'
import { Button, Image, Modal } from 'react-bootstrap'

import './completed.css'

export default class Completed extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <p onClick={this.handleShow}>Register</p>

        {/* <Button bsStyle='primary' bsSize='large' >
  Launch demo modal
</Button> */}
        <Modal show={this.state.show} onHide={this.handleClose} className='completed__modal'>
          <Modal.Header closeButton >
            <div className='completed__modal--div'>
              <Image src='assets/img/ic_check_24px.svg' className='completed__modal--pic' />
            </div>
            <h3 className='title__text text-center'>Device Registered</h3>
          </Modal.Header>
          <Modal.Body >
            <Image src='assets/img/wire_logo.svg' className='completed__modal--wire__logo' />
            <Button className='completed__modal--button'onClick={this.handleClose}>
                Continue
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
