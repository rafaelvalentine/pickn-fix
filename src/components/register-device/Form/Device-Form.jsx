import React, { Component } from 'react'
import { Button,  Modal, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  './device-form.css'



export default class DeviceForm extends Component {

constructor (props, context) {
		super(props, context)

		this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			show: false,
			product:'',
			brand:'',
			model:'',
			imei:'',
			start:'',
			end:''
		}
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

handleChange=(e)=> {	
				this.setState({ 
					[e.target.name]:e.target.value
			 });
		}


	render() {
		const {product, brand, model, imei, start, end} = this.state
		return (
			<div>
					<p>Register Device</p>
					<Button bsStyle='primary' bsSize='large' onClick={this.handleShow}>
						continue
					</Button>
					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>
							<h3 className='title__text text-center'>Register Device</h3>
								<hr className='underrule'/>
						</Modal.Header>
						<Modal.Body>
							<form>
										<FormGroup
										controlId="formBasicText">
											<div id='formgroupone'>
														<div>
															<h3 className='device-text'>Product</h3>
																<FormControl componentClass="select" placeholder="Select Product">
													        <option value="mobile">Mobile</option>
													        <option value="tablet">Tablet</option>
													         <option value="tv">TVs</option>
													          <option value="home">Home Appliances</option>
													           <option value="computer">Computers</option>
													      </FormControl>
														</div>
														<div>
															<h3 className='device-text'>Brand</h3>
																<FormControl componentClass="select" placeholder="select">
													        <option value="iphone">Iphone</option>
													        <option value="other">...</option>
													      </FormControl>
														</div>
													</div>		
											</FormGroup>
											<FormGroup controlId="">
												<div id='formgroupone'>
													<div>
														<h3 className='device-text'>Model</h3>
														<FormControl componentClass="select" placeholder="select">
													        <option value="X">X</option>
													        <option value="other">...</option>
													      </FormControl>
													</div>
													<div>
														<h3 className='device-text'>IMEI/Serial Number</h3>
														<FormControl
															type="password"
															value={imei}
															name="imei"
															placeholder="BZ100000000"
															onChange={this.handleChange}/>
													</div>
												</div>
											</FormGroup>
											<FormGroup controlId="">
												<div id='formgroupone'>
															{/*<div id='select'>
													      <ControlLabel className='device-text'>Select</ControlLabel>
													      <FormControl componentClass="select" placeholder="select">
													        <option value="select">select</option>
													        <option value="other">...</option>
													      </FormControl>
												      </div>*/}
												      <div>
																	<h3 className='device-text'>Warranty Start</h3>
																	<FormControl
																		type="text"
																		value={start}
																		name="start"
																		placeholder="01/01/2017"
																	onChange={this.handleChange}/>
															</div>
															 <div>
																	<h3 className='device-text'>Warranty Ends</h3>
																	<FormControl
																		type="text"
																		value={end}
																		name="end"
																		placeholder="01/01/2018"
																	onChange={this.handleChange}/>
															</div>
													</div>
									      </FormGroup>
											<Button className='registration__modal--button' onClick={this.redirectUser}>Register</Button>
							</form>
						 </Modal.Body>
					</Modal>
			</div>
		);
	}
}
