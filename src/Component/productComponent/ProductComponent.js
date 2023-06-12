import React from 'react'
import { Card } from 'react-bootstrap';
 import { Link } from 'react-router-dom'

 import './productComponent.css'
const ProductComponent = ({ product }) => {
    return (
        <Card style={{direction : 'rtl'}} className="my-3 p-3 product-card">
            <Link to={`/product/${product._id}`} >
            <Card.Img src={product.image} variant="top" />   
                <Card.Title as="div" className="text-center">{product.name}</Card.Title>
                </Link>  
            <Card.Text as="h3" className="text-center product-price">{product.price + "تومان"}</Card.Text>
        </Card>
    )
}

export default ProductComponent
