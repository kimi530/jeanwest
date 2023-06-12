import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './ItemsService';
import './favitems.css'

export default function FavItems() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 2,
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
                    <img src={product.image} alt={product.name} className="itemImg shadow-2" />
                    <h4 className="pn mb-1">{product.name}</h4>
                    <h6 style={{direction : 'rtl'}} className="pp mt-0 ">{ product.price+' تومان'}</h6>
                </div>
            </div>
        );
    };

    return (
        <div className="mt-8">
            <h4 className='text-center'>_____________ پـیشـنـهـاد جـین‌وسـت _____________ </h4>
            <Carousel value={products} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        