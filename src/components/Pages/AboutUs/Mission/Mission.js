import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mission from '../../../../assets/images/Mission.png'
import missionLayer from '../../../../assets/images/mission-layer.png'

const Mission = () => {
    return (
        <div className='mission'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="mission_content">
                        <div className='custom_heading'>
                            <span className='our'>Our</span>
                            <h2><span>Mission</span></h2>
                        </div>
                        <p>
                            Lörem ipsum metrosexualitet ologi. Tement tilig.
                            Vinde grindsamhälle jengen. Kontrana fröbomba
                            juning kapönegen. Jyren prebulingar jätelig. Kana
                            ina: i geodifande solhybrid.
                        </p>
                        <p>
                            Ben telesamma astrotådade.
                        </p>
                        <p>
                            Cynform resultatvarna soling i infrasat. Vårdotek
                            ont intraska. Monol ask.
                        </p>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="mission_banner">
                        <img src={mission} alt="philosophy" />
                    </Col>
                </Row>
            </Container>
            <img className='mission_layer' src={missionLayer} alt=""  />
        </div>
    )
}

export default Mission