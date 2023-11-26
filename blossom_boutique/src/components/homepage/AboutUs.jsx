import React from 'react'
import { Row, Col } from 'react-bootstrap'
import about_us_owner from '../../img/about_us_owner.png'
import about_us_content from '../../img/about_us_content.png'

const AboutUs = () => {
  return (
    <div>
        <Row className='m-0'>
            <Col className='m-0'>
                <img src={about_us_owner} alt=""  className='about_owner'/>
            </Col>
            <Col className='m-0'>
                <img src={about_us_content} className='about_us' alt="" />
            </Col>
        </Row>
    </div>
  )
}

export default AboutUs