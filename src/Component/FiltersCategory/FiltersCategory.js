import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { Checkbox } from "primereact/checkbox";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { clothes } from './Filters'
import { shoes } from './Filters'
import { accessory } from './Filters'
import './Filtercategory.css'
import PriceRange from "./PriceRange";

const FiltersCategory = () => {   
    const [selectedClothes, setSelectedClothes] = useState(null);
    const [selectedShoes, setSelectedShoes] = useState(null);
    const [selectedAccessory, setSelectedAccessory] = useState(null);


    return (
        <Card className="filtercard" >
            <h4>فیلترها</h4>

            <MultiSelect value={selectedClothes} onChange={(e) => setSelectedClothes(e.value)} options={clothes} optionLabel="name" display="chip" 
                placeholder="پوشاک" maxSelectedLabels={3} className="w-full " />

            <MultiSelect value={selectedShoes} onChange={(e) => setSelectedShoes(e.value)} options={shoes} optionLabel="name" display="chip" 
                placeholder="کیف و کفش" maxSelectedLabels={3} className="w-full " />

            <MultiSelect value={selectedAccessory} onChange={(e) => setSelectedAccessory(e.value)} options={accessory} optionLabel="name" display="chip" 
                placeholder="اکسسوری" maxSelectedLabels={3} className="w-full " />

            <div className="gender" >
                <label className="m-3">جنسیت:</label>

                <div className="m-3">
                <Checkbox />
                <label className="mr-1">زن</label>                   
                </div>

                <div className="m-3">
                <Checkbox />
                <label className="mr-1">مرد</label>
                </div>
                                           
            </div>
            <hr/>
            <div className="age">
                <label className="m-3">رنج سنی:</label>

                <div className="m-3">
                <Checkbox />
                <label className="mr-1">بزرگسال</label>
                </div>

                <div className="m-3">
                <Checkbox />
                <label className="mr-1">خردسال</label>               
                </div>
                                           
            </div>
           <hr/>
            <div className="color">
                <label className="m-3">گروه رنگی:</label>
                <div>
                <Button severity="info" />   
                <Button severity="warning" />  
                <Button severity="success" />  
                <Button severity="danger" /> 
                </div>                                                                
            </div>

            <hr/>
            <div>
                <PriceRange />
            </div>
       </Card>
    );
 
}

export default FiltersCategory
