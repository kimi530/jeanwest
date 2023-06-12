import React , { useState , useEffect } from 'react'
import { Container , Row , Col } from 'react-bootstrap'

import axios from 'axios'

import FiltersCategory from '../../Component/FiltersCategory/FiltersCategory'
import ProductComponent from '../../Component/productComponent/ProductComponent'
import SortTabMenu from '../../Component/SortTabMenu/SortTabMenu'
import './All.css'

        

const All = () => {

    const [ products , setProducts ] = useState([])

    useEffect(() => {
        const sendRequest = async () => {
            const response = await axios.get('http://localhost:8000/api/products')

            setProducts(response.data)
        }
        sendRequest()
    } , [])

    return (         
             <Container style={{direction : 'rtl'}}> 
                 <Row>   
                <Col lg={4}>
                    <FiltersCategory />
                </Col>

                <Col lg={8}>
                  <Row>
                <SortTabMenu />
                    {products.map((item) => {                   
                        return (                                  
                                <Col lg={3}>
                                <ProductComponent product={item} />
                                </Col>
                        )            
                    })}
                   </Row>
                </Col> 
                </Row>    
                </Container>       
          
         
    )
}

export default All
