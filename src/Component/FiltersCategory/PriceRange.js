import React, { useState } from "react";
import { Col , Container, Row } from 'react-bootstrap'
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function PriceRange() {
    const [value, setValue] = useState([0,100]);

    return (
        <Container className=" flex justify-content-center pricerange" >
            <Row>
            <Col xs={6}>
                <label>از</label>
            <InputText value={value[0]} onChange={(e) => setValue(e.target.value)}  className="w-5rem"/> 
            <label>تومان</label>
            </Col>
                  
            <Col xs={6}>
            <label>تا</label>
            <InputText value={value[1]} onChange={(e) => setValue(e.target.value)}  className="w-5rem"/>
            <label>تومان</label>
            </Col>
            <Col xs={12}>
            <Slider value={value} onChange={(e) => setValue(e.value)} className=" w-full" range />
            </Col>
            </Row>
        </Container>
    )
}
        