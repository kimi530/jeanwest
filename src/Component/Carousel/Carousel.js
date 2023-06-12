import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from './Categories';
import './flag.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';    
import './Carousel.css'

export default function FirstCarousel() {
    const [products, setProducts] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className=" m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={product.image} alt={product.name} className="slides shadow-2" />
                </div>
                <div>
                    <h4 className="slide-title mb-1">{product.name}</h4>           
                </div>
            </div>
        );
    };

    return (
        <div className="mt-5">
            <Carousel value={products} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        