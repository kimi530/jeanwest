import React , { useState , useEffect } from 'react'
import { Col , Row , Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from 'axios'
import './Cart.css'

const Cart = () => {
    const params = useParams()

    const getLocalStorage = () => {
        let cartItems = localStorage.getItem('cartItems')
        if(cartItems){
            return (cartItems = JSON.parse(localStorage.getItem('cartItems')))
        } else {
            return []
        }
    }
   
    const [ cartItems , setCartItems ] = useState(getLocalStorage())
    const addToCart = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/products/${params.id}`)

        setCartItems((prestate) => {
            let list = prestate;
            let index = list.findIndex(el => el.productitem == data._id);
           if(index == -1){
            return [
                ...prestate, {
                    productitem: data._id,
                    name: data.name,
                    image: data.image,
                    amount: 1,
                    price: data.price
                }
            ]
           } else {
            const newcartItems = prestate.map((item) => {
                if (item.productitem === data._id)
                    return { ...item, amount: item.amount + 1 }
                return item
    
            })
            return newcartItems
           }
           
        })

    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    },[cartItems])

    useEffect(() => {
        if(params.id) {
            addToCart()
        }
    }, [params.id])

    const removeItemHandler = (id) => {
        const newcartItems = cartItems.filter((item) => item.productitem !== id)
         setCartItems(newcartItems)
     }
     
     const incItemHandler = (id) => {
        const newcartItems = cartItems.map((item) =>{
            if(item.productitem === id)
                return {...item, amount: item.amount + 1}
                return item
            
        })
        setCartItems(newcartItems)
    
       }

       const decItemHandler = (id) => {
        const newcartItems = cartItems.map((item) =>{
            if((item.productitem === id) && (item.amount > 1))
                return {...item, amount: item.amount - 1 }
                return item
            
        })
        setCartItems(newcartItems)
    
       }

    return (
        <Container className='mt-8' style={{direction : 'rtl'}}>
            <Row>               
            {cartItems.length === 0 ? (
                <Col lg={9} className='empty-cart'>    
                 <p className='empty-cart'>سبد خرید خالی است.</p>
                 </Col>
                  ) : (

<Col lg={9}>               
{cartItems.map((item) => {
    return(     
        <Row >                
            <Col sm={6}>
            <img src={item.image} style={{width: '50%'}} />
            </Col>

            <Col sm={6}>                    
            <p>نام محصول: {item.name}</p>
            <p>قیمت: {item.price+' تومان'}</p>   
            <button className='incbtn' onClick={() => incItemHandler(item.productitem)}>+</button> 
             <span>{item.amount}</span>
            <button className='decbtn' onClick={() => decItemHandler(item.productitem)}>-</button>
    
            <span onClick={() => removeItemHandler(item.productitem)}>
            <i className="bi bi-trash mr-8"></i>
            </span>   
            </Col>
            <hr/>      
    </Row>
       
    )
})}
</Col>
            )}
   

            <Col lg={3}>
            <Card className='totalPrice'>
                <p>قیمت کل:{cartItems.reduce((acc , item ) => acc + item.price * item.amount , 0) + ' تومان'}</p>
            </Card>
            </Col>
            </Row>
        </Container>
    )
   
}

export default Cart
