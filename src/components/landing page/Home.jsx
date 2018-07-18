import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './home.css'

export default class Home extends Component {
  render () {
    return (
    // full width container
      <Grid id='grid' fluid='true'>
        {/* full screen landing page */}
        <Row className=' text-center'id='home'>
          <Col xs={12} sm={12} className=''>
            <div id='home--div'>
              <h1>
                   Go ahead, Fix your devices....
              </h1>
              <p className='home__text'>
                   we provide you and your device with convience and hospitality
              </p>
              <Link to='/' >
                <Button bsStyle='primary' className='home__button'>Try us now</Button>
              </Link>
              <div id='home__scroll'>
                <a href='#howit' >
                  <Button>
                    <Image src='assets/img/arrow_downward.svg' className='home__button--arrow' />
                  </Button>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* how pick and fix works section */}

        <Row id='howit'>
          <Image className='how--wire_logo'src='assets/img/wire_logo.svg' />
          <Col xs={12} sm={12} className=''>
            <h2 className='howit--h2 text-center'>How Pick n' Fix works</h2>
            <div id='works'>
              <h3 className='howit--h3 text-center'>Choose your product and select your service </h3>
              <hr className='underrule' />
              <div className='list__div'>
                <ul className='list__device'>
                  <li>
                    <Image src='assets/img/Group 39.svg' className='device-pics' />
                    <p>Mobiles</p>
                  </li>
                  <li>
                    <Image src='assets/img/Group 25.svg' className='device-pics' />
                    <p>Tablets
                    </p>
                  </li>
                  <li>
                    <Image src='assets/img/Group 43.svg' className='device-pics' />
                    <p>TVs
                    </p>
                  </li>
                  <li>
                    <Image src='assets/img/Group 45.svg' className='device-pics' />
                    <p>
											Home Appliances
                    </p>
                  </li>
                  <li>
                    <Image src='assets/img/Group 47.svg' className='device-pics' />
                    <p>
											Computers
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* inquiry section */}

        <Row id='inquiry'>
          <div id='inquiry__div'>
            <Image className='inquiry--wire_logo'src='assets/img/wire_logo.svg' />

            <p className='inquiry__div--p text-center text-capitalize'>
                inquiry services
            </p>
            <hr className='underrule' />

            <Col xs={12} sm={4} lg={4} className='inquiry__div--Col'>
              <Image src='assets/img/Group 72.svg' className='inquiry__pics' />
              <p className='text-center text-capitalize' >Repair your device</p>
            </Col>
            <Col xs={12}sm={4} lg={4} className='inquiry__div--Col'>
              <Image src='assets/img/Group 74.svg' className='inquiry__pics' />
              <p className='text-center text-capitalize'> warranty Check</p>
            </Col>
            <Col xs={12} sm={4} lg={4} className='inquiry__div--Col'>
              <Image src='assets/img/Group 77.svg' className='inquiry__pics' />
              <p className='text-center text-capitalize'> Repair status track</p>
            </Col>
          </div>
        </Row>

        {/* delivery section */}

        <Row id='pick-up'>
          <Image className='pick--wire_logo'src='assets/img/wire_logo.svg' />
          <Image className='pick--wire_logo--bottom'src='assets/img/wire_logo.svg' />
          <div className='pick-up__bg' />
          <div id='pick-up__div'>
            <Col xs={12}>
              <h3 className='pick-up__div--p text-center text-capitalize'>
                pick-up and delivery
              </h3>
              <hr className='underrule' />
            </Col>
            <Col xs={12} sm={4} lg={4} >
              <div className='card' >
                <Image className='card-img-top' src='assets/img/man-carrying-package.svg' alt='man-carrying-package' />
                <div class='card-body'>
                  <p className='text--one text-center text-capitalize'>
										Carry-In service
                  </p>
                  <p className='text--two text-center'>
										Bring your device to pick n' fix
										center to repair
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} lg={4} >
              <div className='card' >
                <Image className='card-img-top' src='assets/img/men-carrying-a-box.svg' alt='men-carrying-a-box' />
                <div class='card-body'>
                  <p className='text--one text-center text-capitalize'>
										Pick-up service
                  </p>
                  <p className='text--two text-center'>
										Need pick n' fix staff to pick
										up device from your home
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4} lg={4} >
              <div className='card' >
                <Image className='card-img-top' src='assets/img/delivery-truck.svg' alt='delivery-truck' />
                <div class='card-body'>
                  <p className='text--one text-center text-capitalize'>
									Deliver-to service
                  </p>
                  <p className='text--two text-center'>
										Deliver your device to
										pick n' fix by express service
                  </p>
                </div>
              </div>
            </Col>
          </div>

        </Row>

        {/* About section */}

        <Row id='about'>
          <div id='about__div'>
            <Col xs={12}>
              <h3 className='about__div--h3 text-center'>
                About Pick n' Fix
              </h3>
            </Col>
            <Col xs={12} >
              <div3 id='about__div__col--div'>
                <p className='about__div--p text-center'>
                  At McDorsey we aim to provide flexibility and easy
                  accessibility to service by meeting the customer's
                  support need at every point in time.We currently
                  operate SLAs (Service Level Agreements) with over
                  12 OEMs (Original Equipment Manufacturers). Our
                  support services span around providing device
                  support throughout the life cycle of your
                  device.This typically also includes warranty,
                  upgrade and repair services.
                </p>
              </div3>
            </Col>
          </div>
        </Row>

        {/* we care section */}

        <Row id='we-care'>
          <Image className='we-care--wire_logo'src='assets/img/wire_logo.svg' />
          <div id='we-care__div'>
            <Col xs={12}>
              <h3 className='we-care__div--h3 text-center'>
							  We care about your technology
              </h3>
              <p className=' we-care__div--p text-capitalize text-center we-care-p__one'>
                  15 Years of Professional Services For Over 14 OEMs and 6 MNOs
              </p>
            </Col>
            <Col xs={12}>
              <Link to='/' >
                <Button bsStyle='primary
                ' className='we-care__button'>Get started now
                </Button>
              </Link>
            </Col>
          </div>
        </Row>

        {/* bottom list */}
        <Row id='bottom'>
          <Image className='bottom__div--wire_logo'src='assets/img/wire_logo.svg' />
          {/* <Image className='bottom__div--wire_logo-bottom'src='assets/img/wire_logo.svg'/> */}
          <div id='bottom__div'>
            <Col xs={12} sm={3}>
              <div id='product'>
                <h3 className='product-h3'>Products</h3>
                <p className='product-mobile'>Mobile</p>
                <p className='product-tablets'>Tablets</p>
                <p className='product-tvs'>Tvs</p>
                <p className='product-home-application'>Home application</p>
                <p className='product-computer'>Computers</p>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div id='service'>
                <h3 className='service-h3'> Services</h3>
                <p className='service-warranty'>Warranty check</p>
                <p className='service-repair'>Repair of devices</p>
                <p className='service-track'>Repair status track</p>
              </div>
            </Col>

            <Col xs={12} sm={3}>
              <div id='contact-us'>
                <h2 className='contact-us-h2'>Contact us</h2>
                <div id='email'>
                  <h3>Email address</h3>
                  <p>
                      customercare@mcdorsey.com
                  </p>

                </div>

              </div>

              <div id='address'>
                <h3>Address</h3>
                <p>
                33, Moloney Street, opposite Kam Salem
                Police HQ, Obalende, Lagos Nigeria.
                </p>
              </div>
              <div id='phone-number'>
                <h3>Phone number</h3>
                <p>
                   +234 809 833 3299
                </p>
                <p>
                  +234 802 309 4257
                </p>

              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div id='connect'>
                <p>Connect with us:</p>
                <Image className='connect-image' src='assets/img/facebook-logo.svg' />
                <Image className='connect-image' src='assets/img/twitter.svg' />
              </div>
            </Col>
          </div>
        </Row>

        {/* footer */}

        <Row id='footer'>
          <Image className='footer--wire_logo'src='assets/img/wire_logo.svg' />
          <Col xs={12}>
            <div id='footer__div'>
              <p>
                   Copyright©2018   Pick n' Fix. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
        {/* <Jumbotron>
          <h2>
              Welcome to CodeLife.io
          </h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap </p>
          <Link to='/about' >
            <Button bsStyle='primary'>About</Button>
          </Link>
        </Jumbotron>
        <Row className='showgrid text-center'>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/img/person-1.jpg' circle className='device-pics' />
            <h3>Frank</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/img/person-2.jpg' circle className='device-pics' />
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className='person-wrapper'>
            <Image src='assets/img/person-3.jpg' circle className='device-pics' />
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row> */}

      </Grid>
    )
  }
}
