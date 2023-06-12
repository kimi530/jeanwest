import React , { useState , useEffect } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { useParams , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
        
const Product = () => {
    const [ product , setProduct ] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const sendRequest = async () => {
            const response = await axios.get(`http://localhost:8000/api/products/${params.id}`)

            setProduct(response.data)
        }
        sendRequest()
    }, [])

    const AddToCartHandler = () => {
        navigate(`/cart/${params.id}`)
        
    }
    return (
      
           <Container style={{direction : 'rtl'}}>
                <Row className="mt-8">
               <Col lg={6}>
                   <img className="shadow-2 w-6" src={product.image} />
                   
               </Col>
               <Col lg={5}>
                   <h3>نام محصول: {product.name}</h3>
                   <h6>قیمت: {product.price}تومان </h6>
                   <Button 
                   onClick={AddToCartHandler}
                   icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
               </Col>
               </Row>
           </Container>
       
    )
}

export default Product
