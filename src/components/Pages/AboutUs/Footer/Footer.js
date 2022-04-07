import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../../../assets/images/loog.svg'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col lg={5} md={5} sm={12} className="footer_content">
                        <div className='footer_loog'>
                            <img src={logo} alt='Logo' />
                        </div>
                        <p>Lörem ipsum tetralig miling. </p>
                        <p>Es rekabelt och minat råtina preda, paran gigans ananat.
                            Ohöna jenat bören, makropalig i detreren, bonar, pogen,
                            bessa för att fas, in. </p>
                        <p>Dibelt dek fisk de hida nåling jeling multikan remyrat nons.
                            Du kan vara drabbad.</p>
                    </Col>
                    <Col lg={7} md={7} sm={12} className="vision_banner">
                        <div className='inner_conrent d-flex'>
                            <div className='col_menu'>
                                <h5>Menus</h5>
                                <ul className='menu_list'>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Services</a></li>
                                </ul>
                            </div>
                            <div className='col_menu'>
                                <h5>Quick Link</h5>
                                <ul className='menu_list'>
                                    <li><a href="#">Wedding Vendors</a></li>
                                    <li><a href="#">Become an affiliate</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Term of Services</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div className='col_menu'>
                                <h5>Social Media</h5>
                                <h6>Follow us in on our all social

                                    media and get updates

                                    frequently</h6>
                                <ul className='sosial'>
                                    <li>
                                        <a href='#'><AiFillFacebook /></a>
                                    </li>
                                    <li>
                                        <a href='#'><AiOutlineInstagram /></a>
                                    </li>
                                    <li>
                                        <a href='#'><AiOutlineTwitter /></a>
                                    </li>
                                    <li>
                                        <a href='#'><AiOutlineYoutube /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row>
                    <Col lg={12} md={12} sm={12} className="vision_content">
                        <div className='copy_right'>
                            <h5>By Dream Nikah</h5>
                            <h6>Copyright @2021 DreamNikah</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer