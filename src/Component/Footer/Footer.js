import React from 'react'
import { Col , Row , Container } from 'react-bootstrap'
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
           <Container>
           <h2 className='text-center'>jeanwest</h2>
           <p className='text-center'>JEANSWEST FITS BEST</p>
               <Row>
                   <Col lg={3}>
                       <ul>
                           <h6>فروشگاه آنلاین</h6>
                           <li>مردانه</li>
                           <li>زنانه</li>
                           <li>بچه‌گانه</li>
                           <li>پوشاک</li>
                           <li>کیف و کفش</li>
                           <li>اکسسوری</li>
                       </ul>
                   </Col>
                   <Col lg={3}>
                       <ul>
                           <h6>خدمات مشتریان</h6>
                           <li>شرایط تعویض کالا</li>
                           <li>باشگاه مشتریان</li>
                           <li>دعوت از دوستان</li>
                           <li>تماس با ما</li>
                       </ul>
                   </Col>
                   <Col lg={3}>
                   <ul>
                       <h6>راهنما</h6>
                           <li>قوانین و مقررات</li>
                           <li>راهنمای خرید از اپلیکیشن</li>
                           <li>فروشگاه های جین وست</li>
                           <li>دانلود اپلیکیشن</li>
                       </ul>
                    </Col>
                    <Col lg={3}>                     
                    <ul>
                        <h6>اطلاعات جین وست</h6>
                           <li>درباره ما</li>
                           <li>فروش سازمانی</li>
                           <li>راهنمای شستشو</li>
                           <li>فرصت های شغلی</li>
                       </ul>
                    </Col>
                    <Col lg={3}>
                        <img src='./home/logo.png' />
                        <img src='./home/logo (1).png' />
                    </Col>
               </Row>
           </Container>
        </div>
    )
}

export default Footer
