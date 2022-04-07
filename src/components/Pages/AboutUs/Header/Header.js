import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../../../assets/images/loog.svg'
import { FiAlignLeft } from "react-icons/fi"
import Bell from '../../../../assets/images/bell-icon.png'

const Header = () => {
    return (
        <div className='header'>
            <Navbar className='desktop_show' expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt='Logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav>
                            <Nav.Link href="#action1" className='active'>Home</Nav.Link>
                            <Nav.Link href="#action2">Browse through</Nav.Link>
                            <Nav.Link href="#action2">About us</Nav.Link>
                            <Nav.Link href="#action2">Contact Us</Nav.Link>

                            <button className='button_login'>
                                Login
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='mobile_header'>
                <Container>
                    <div className='mobile_show_navbar'>
                        <FiAlignLeft className='left_bar' />
                        <img src={logo} alt='Logo' className='logo' />
                        <img src={Bell} alt="" className='bell_bar' />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header