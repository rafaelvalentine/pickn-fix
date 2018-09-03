import React, { Component } from 'react'
import {Button, Modal, FormControl, FormGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Completed from '../completed/Completed.jsx'
import './device-form.css'

export default class DeviceForm extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShows = this.handleShows.bind(this)
    this.handleCloses = this.handleCloses.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      shows: false,
      product: '',
      brand: '',
      model: '',
      imei: '',
      start: '',
      end: ''
    }
  }

  handleCloses () {
    this.setState({ shows: false })
  }

  handleShows () {
    this.setState({ shows: true })
    console.log(this.state.shows)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    const {product, brand, model, imei, start, end} = this.state
    return (
      <div>
        <p onClick={this.handleShows} >Continue</p>
        <Modal show={this.state.shows} onHide={this.handleCloses} className='register__modal'>
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
                      type='password'
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
                      type='text'
                      value={start}
                      name='start'
                      placeholder='01/01/2017'
                      onChange={this.handleChange} />
                  </div>
                  <div>
                    <h3 className='device-text'>Warranty Ends</h3>
                    <FormControl
                      type='text'
                      value={end}
                      name='end'
                      placeholder='01/01/2018'
                      onChange={this.handleChange} />
                  </div>
                </div>
              </FormGroup>
              {/* <Button className='registration__modal--button' onClick={this.redirectUser}>Register</Button> */}
              <Button className='registration__modal--button'><Completed /></Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
