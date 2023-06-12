import React from 'react'
import { Container , Nav , Navbar , Button , Row , Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Header.css'

const Header = () => {
    return (
        <Container fluid style={{direction : 'rtl'}}>
         <img className="banner" style={{width:"100%"}} src="./home/1677999223344-topBanner.gif" />
                <Row className="row1">
                    <Col lg={4}>
                      <form className="input-form">
                        <Button type="submit" variant="outline" className="search-btn" />
                        <input 
                        type="search"
                        className="search-input"
                        placeholder="جستجو در همه محصولات"/>
                        </form>
                    </Col>
                    
                    <Col lg={4}>
                        
                        <Nav className="justify-content-center">
                        <LinkContainer to="/"><Nav.Link className="navbrand">jeanwest</Nav.Link></LinkContainer>
                        </Nav>
                       
                    </Col>

          <Col lg={4}>
                    <Nav className="justify-content-end">
                    <LinkContainer to="/cart"><Nav.Link><Button variant="outline"><i className="bi bi-cart"></i></Button></Nav.Link></LinkContainer>
                    <LinkContainer to="/account"><Nav.Link><Button variant="outline"><i className="bi bi-person"></i></Button></Nav.Link></LinkContainer>
                    <LinkContainer to="/fav"><Nav.Link><Button variant="outline"><i className="bi bi-suit-heart"></i></Button></Nav.Link></LinkContainer>
                    <LinkContainer to="/location"><Nav.Link><Button variant="outline"><i className="bi bi-geo-alt"></i></Button></Nav.Link></LinkContainer>
                    </Nav>
                    </Col>
                </Row>

                <Row className="mb-3">
                <Nav className="justify-content-center nav-links">                 
                        <LinkContainer to="all"><Nav.Link className="nav-links">همه محصولات</Nav.Link></LinkContainer>
                        <LinkContainer to="man"><Nav.Link className="nav-links">مردانه</Nav.Link></LinkContainer>
                        <LinkContainer to="woman"><Nav.Link className="nav-links">زنانه</Nav.Link></LinkContainer>
                        <LinkContainer to="kids"><Nav.Link className="nav-links">بچگانه</Nav.Link></LinkContainer>
                        <LinkContainer to="clothes"><Nav.Link className="nav-links">پوشاک</Nav.Link></LinkContainer>
                        <LinkContainer to="shoes"><Nav.Link className="nav-links">کیف و کفش</Nav.Link></LinkContainer>
                        <LinkContainer to="accessory"><Nav.Link className="nav-links">اکسسوری</Nav.Link></LinkContainer>
                        <LinkContainer to="sale"><Nav.Link className="nav-links">فروش ویژه</Nav.Link></LinkContainer>
                    </Nav>
                </Row>
               
        </Container>
    )
}

export default Header
