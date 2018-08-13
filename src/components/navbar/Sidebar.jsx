import React, { Component } from 'react'
import {Button, Glyphicon} from 'react-bootstrap'
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
    var sidenav = document.getElementById('mysidenav')
    var body = document.getElementById('main')
    var home = document.getElementById('home--div')
    var button = document.getElementById('Aside__Button')
    if (this.state.show) {
      sidenav.style.width = '250px'
      body.style.marginLeft = '250px'
      body.style.overflow = 'hidden'
      sidenav.style.backgroundColor = '#fff'
      button.style.backgroundColor = '#1c92d2'
      button.style.color = '#fff'
      // home.style.backgroundColor = '#000'
      // home.style.opacity = '.5'
      // sidenav.style.opacity = '.5'
      console.log('it works')
      this.setState({ show: false, glyph: 'remove' })
    } else {
      this.setState({ show: true, glyph: 'menu-hamburger' })
      sidenav.style.width = '0'
      body.style.marginLeft = '0'
      body.style.overflow = 'visible'
      button.style.backgroundColor = 'transparent'
      button.style.color = '#1c92d2'
      // body.style.backgroundColor = '#fff'
      // body.style.opacity = '1'
      console.log('it was false', this.setState())
    }
  }

  render () {
    return (
      <div>

        <aside id='mysidenav' className='sidenav'>
          <div />
          <div />
        </aside>
        {/* <p>Click to get the full Modal experience!</p> */}
        <Button id='Aside__Button'className='aside__button'>
          <Glyphicon onClick={this.handleShow} glyph={this.state.glyph} />
        </Button>
        {/* <i className='fa fa-bars' onClick={this.handleShow} />

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum necessitatibus minus nihil unde distinctio, dolores repudiandae porro ipsa omnis vitae asperiores quam molestiae suscipit provident accusamus ducimus explicabo inventore.

            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal> */}

      </div>
    )
  }
}
