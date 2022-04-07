import React from 'react'
import user1 from '../../../../assets/images/1.png'
import user2 from '../../../../assets/images/2.png'
import user3 from '../../../../assets/images/3.png'
import user4 from '../../../../assets/images/4.png'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai"
import { Col, Container, Row } from 'react-bootstrap'

const TeamMembers = () => {
    return (
        <div className='team'>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="text-center">
                        <div className='custom_heading center'>
                            <strong className='our'>Our</strong>
                            <h2><span>Team Members</span></h2>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="team_content">
                        <div className='pad'>
                            <img src={user1} alt="" />
                            <h4>Faizan Khan</h4>
                            <h5>CEO and Head of Operations</h5>
                            <ul>
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
                                    <a href='#'><AiOutlineLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="team_content">
                        <div className='pad'>
                            <img src={user2} alt="" />
                            <h4>Sana Khan</h4>
                            <h5>CEO and Head of Operations</h5>
                            <ul>
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
                                    <a href='#'><AiOutlineLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="team_content">
                        <div className='pad'>
                            <img src={user3} alt="" />
                            <h4>Mohammad Ansari</h4>
                            <h5>CEO and Head of Operations</h5>
                            <ul>
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
                                    <a href='#'><AiOutlineLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="team_content">
                        <div className='pad'>
                            <img src={user4} alt="" />
                            <h4>Zarin Shaikh</h4>
                            <h5>CEO and Head of Operations</h5>
                            <ul>
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
                                    <a href='#'><AiOutlineLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TeamMembers