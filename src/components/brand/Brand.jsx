import React from 'react';
import './brand.css';
import {  turbine, btl,fanuc } from './imports';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={btl}  alt="google"/>
            </div>
            <div>
                <img src={turbine} alt="slack" />
            </div>
            <div>
                <img src={fanuc} alt="shopify"/>
            </div>
        </div>
    );
};

export default Brand;