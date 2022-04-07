import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import philosophy from '../../../../assets/images/philosophy.png'

const Philosophy = () => {
    return (
        <div className='philosophy'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="philosophy_content">
                        <div className='custom_heading'>
                            <span className='our'>Our</span>
                            <h2><span>Philosophy</span></h2>
                        </div>
                        <p>
                            Lörem ipsum metrosexualitet ologi. Tement tilig. Vinde
                            grindsamhälle jengen. Kontrana fröbomba juning
                            kapönegen. Jyren prebulingar jätelig. Kana ina: i geodifande
                            solhybrid.
                        </p>
                        <p>
                            Ben telesamma astrotådade.
                        </p>
                        <p>
                            Cynform resultatvarna soling i infrasat. Vårdotek ont
                            intraska. Monol ask.
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="philosophy_banner">
                        <img src={philosophy} alt="philosophy" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Philosophy