import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
    return (
        <div className='about_section'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center'>About <span>Us.</span></h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About