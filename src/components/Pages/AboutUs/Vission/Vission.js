import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import vission from '../../../../assets/images/Vission.png'
import vissionLayer from '../../../../assets/images/vission_layer.png'

const Vission = () => {
    return (
        <div className='vision'>
            <img src={vissionLayer} alt="" className='layer' />
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} className="vision_content">
                        <div className='custom_heading'>
                            <span className='our'>Our</span>
                            <h2><span>Vission</span></h2>
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
                    <Col lg={6} md={6} sm={12} className="vision_banner">
                        <img src={vission} alt="philosophy" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Vission