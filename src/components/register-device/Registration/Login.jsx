import React, { Component } from 'react'
import { Button, Modal, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../../landing page/home.css'
import './login.css'

export default class Registration extends Component {

	constructor (props, context) {
		super(props, context)

		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			show: false,
			username: '',
			password:''
		}
	}
	handleModal = e => {
		e.preventDefault();
		this.setState(previousState => {
			show: !previousState.show
		})
	}

	redirectUser = () => {
		window.location.href = "/about";
	}

	handleClose =(e)=> {
		this.setState({ show: false })
	}

	handleShow () {
		this.setState({ show: true })
		console.log(this.state)
	}
	getValidationState() {
		const length = this.state.username.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}
	getValidationStatePassword() {
					// get paragraph tag
					const passwordText = document.getElementById('passwordtext')

					// setting the values for password  strength color and strength text
					var strText=['weak','average','strong','very strong']
					var strColor= ['#c00', '#f80','#bada55','#080']


					// strength state
					const strength = this.state.password
					
					// checking for uppercase letters
					var upperCase = strength.match(/[A-Z]/g)
					upperCase=(upperCase && upperCase.length || 0)

					// checking for numbers
					var numberPresent = strength.match(/\d/g)
					numberPresent=(numberPresent && numberPresent.length || 0)

					// checking for other characters
					var notAletter = strength.match(/\W/g)
					notAletter=(notAletter && notAletter.length || 0)

					// overall strength of the password
					var fullStrength = strength.length + upperCase + (numberPresent * 2) + (notAletter * 3)
					fullStrength =Math.min(Math.floor(fullStrength/10),3);
					

					if (fullStrength === 3) {
						return  passwordText.textContent = strText[fullStrength],  passwordText.style.color = strColor[fullStrength], 'success'
					}
					else if (fullStrength === 2) {
						return  passwordText.textContent = strText[fullStrength],  passwordText.style.color = strColor[fullStrength],'warning'
					}
					else if (fullStrength ===1){ 
						return  passwordText.textContent = strText[fullStrength],  passwordText.style.color = strColor[fullStrength], 'error'
					}
					return null;
		 }
		handleChange=(e)=> {	
				this.setState({ 
					[e.target.name]:e.target.value
			 });
		}
 


	render () {
		const {username, password} = this.state
		return (
			<div>
					<p>Click to get the full Modal experience!</p>

					<Button bsStyle='primary' bsSize='large' onClick={this.handleShow}>
						Launch demo modal
					</Button>
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>
							<h3 className='title__text text-center'>Register Device</h3>
								<hr className='underrule'/>
						</Modal.Header>
						<Modal.Body>
							<form>
									<FormGroup
										controlId="formBasicText"
										validationState={this.getValidationState()}>
										<h3 className='username text-center'>Username</h3>
										<FormControl
												type="text"
												value={username}
												name="username"
												placeholder="Enter Username"
												onChange={this.handleChange}/>		
											</FormGroup>
										<FormGroup controlId="formPassowrd"
										validationState={this.getValidationStatePassword()}>
											<h3 className='password text-center'>Password</h3>
											<FormControl
													type="password"
													value={password}
													name="password"
													placeholder="Enter Password"
													onChange={this.handleChange}/>
												<p id="passwordtext"></p>
										</FormGroup>
										<Button className='continue__modal--button' onClick={this.redirectUser}>Continue</Button>
							</form>
						 </Modal.Body>
					</Modal>
			</div>
		)
	}
}
