import React from 'react';
import {imageProduct} from "./photoProducts";
import "./index.scss";

const Products = () => {
  return (
    <div className='products'>
<div className="products__title">
Широкий ассортимент товаров
</div>
<div className="products__subtitle">
для малышей и мам
</div>
<div className="products__images">
{
    imageProduct.map(({linkImg, title}, index) => <div key={index} className="products__image">
    <img src={linkImg} alt="" />
    <div className="products__image-title">
      {title}
    </div>
</div>)
}
</div>
    </div>
  )
}


export default Products;