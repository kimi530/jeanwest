import React from 'react'
import Home from './Pages/Home/Home'
import Header from './Component/Header/Header'
import { Container } from 'react-bootstrap'
import { Route , Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import './App.css'
import All from './Pages/All/All'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import Account from './Pages/Account/Account'

const App = () => {
  return (
    <Container fluid className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all" element={<All />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart/:id?" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <main></main>
      <Footer />

    </Container>
  )
}

export default App
