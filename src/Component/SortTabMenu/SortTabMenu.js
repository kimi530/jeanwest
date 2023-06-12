import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { Container } from 'react-bootstrap'
import './SortTabMenu.css'

export default function SortTabMenu() {
    const items = [
        {label: 'پیشفرض'},
        {label: 'ارزان‌ترین'},
        {label: 'گران‌ترین'},
        {label: 'بیشترین تخفیف'},
        {label: 'تنوع بر اساس رنگ'},
        {label: 'جدیدترین'}
    ];

    return (
       
     <div className='tabmenu'>
       <p>مرتب‌سازی:</p><TabMenu model={items} className='TB'/>
        </div>
   
     
    )
}
        