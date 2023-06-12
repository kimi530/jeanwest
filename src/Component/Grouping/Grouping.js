import React from 'react'
import { Col , Row , Container } from 'react-bootstrap'
import "./Grouping.css"

const Grouping = () => {
    return (
        <Container className="grouping" style={{direction : 'rtl'}}>
            <Row className="mb-8">
            <h4 className='text-center'>_____________ دسـتـه‌بـنـدی‌هـا _____________ </h4>
            <Col xs={6}>
                <img src="./home/1679127618014-desk-accessories.jpg" />
                <img src="./home/1679127626406-desk-pants.jpg" />
            </Col>
            <Col xs={6}>
                <img src="./home/1679127633952-desk-shoes.jpg" />
                <img src="./home/1679127644043-desk-mardane.jpg" />
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <img src="./home/1677496812991-desk-club@3x-100.jpg" />
                </Col>
                <Col xs={4}>
                    <img src="./home/1677496828576-desk-appDL@3x-100.jpg" />
                </Col>
                <Col xs={4}>
                    <img src="./home/1677496842394-desk-referal@3x-100.jpg" />  
                </Col>
            </Row>
        </Container>
    )
}

export default Grouping
