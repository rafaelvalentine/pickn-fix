import React, { Component } from 'react'
import { Button, Modal, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Completed from '../Completed/Completed.jsx'
import './device-form.css'

export default class DeviceForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      show: false,
      shows: false,
      product: '',
      brand: '',
      model: '',
      imei: '',
      start: '',
      end: ''
    }
  }

  handleClose () {
    this.setState({
      show: false,
      shows: true })
  }

  handleShow () {
    this.setState({ show: true })
    console.log(this.state.show)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const { product, brand, model, imei, start, end } = this.state
    return (
      <div>
        {/* <p onClick={this.handleShows} >Continue</p> */}
        {/* <p>Continue</p> */}
        <Modal show={this.props.shows} onHide={this.handleClose} className='register__modal'>
          {/* <Modal show={this.state.show} onHide={this.handleCloses} className='register__modal'> */}
          <Modal.Header closeButton>
            <h3 className='title__text text-center'>Register a device</h3>
            <hr className='underrule' />
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId='formBasicText'>
                <div id='formgroupone'>
                  <div>
                    <h3 className='device-text'>Product</h3>
                    <FormControl componentClass='select' placeholder='Select Product'>
                      <option value='mobile'>Mobile</option>
                      <option value='tablet'>Tablet</option>
                      <option value='tv'>TVs</option>
                      <option value='home'>Home Appliances</option>
                      <option value='computer'>Computers</option>
                    </FormControl>
                  </div>
                  <div>
                    <h3 className='device-text'>Brand</h3>
                    <FormControl componentClass='select' placeholder='select'>
                      <option value='iphone'>Iphone</option>
                      <option value='other'>...</option>
                    </FormControl>
                  </div>
                </div>
              </FormGroup>
              <FormGroup controlId=''>
                <div id='formgroupone'>
                  <div>
                    <h3 className='device-text'>Model</h3>
                    <FormControl componentClass='select' placeholder='select'>
                      <option value='X'>X</option>
                      <option value='other'>...</option>
                    </FormControl>
                  </div>
                  <div>
                    <h3 className='device-text'>IMEI/Serial Number</h3>
                    <FormControl
                      type='number'
                      value={imei}
                      name='imei'
                      placeholder='BZ100000000'
                      onChange={this.handleChange} />
                  </div>
                </div>
              </FormGroup>
              <FormGroup controlId=''>
                <div id='formgroupone'>
                  <div>
                    <h3 className='device-text'>Warranty Start</h3>
                    <FormControl
                      type='date'
                      value={start}
                      name='start'
                      placeholder='01/01/2017'
                      onChange={this.handleChange} />
                  </div>
                  <div>
                    <h3 className='device-text'>Warranty Ends</h3>
                    <FormControl
                      type='date'
                      value={end}
                      name='end'
                      placeholder='01/01/2018'
                      onChange={this.handleChange} />
                  </div>
                </div>
              </FormGroup>
              {/* <Button className='registration__modal--button' onClick={this.redirectUser}>Register</Button> */}
              <Button className='registration__modal--button' onClick={this.handleClose}><Completed shows={this.state.shows} /></Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
