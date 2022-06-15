import React from 'react';
import Link from 'next/link';
// Above link is added to add product details

import { urlFor } from '../lib/client';
// To import images to sanity Dashboard

const Product = ({ product : {image , name, slug, price}}) => {
  return (
    <div>
    <Link href={`/product/${slug.current}`} >
    <div className='product-card'>
     <img src={urlFor(image && image[0])} width ={250} height={250} className="product-image" />
     <p className='product-name'>{name}</p> 
     <p className='product-price'>${price}</p> 
    </div> 
     </Link>  
    </div>
  )
}

export default Product