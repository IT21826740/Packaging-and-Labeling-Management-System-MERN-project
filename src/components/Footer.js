import React from 'react'

import {Container, Row, Col} from "react-bootstrap";
import "./footer.css";


const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg="12" className='text-center py-3'>
                    <p>{currentYear} &copy; <b>ARTICRAFTS</b> All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;