import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'
// for the sanity images
const FooterBanner = ({footerBanner : {discount , largeText1 ,desc ,largeText2, saleTime, smallText, midText, product, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
     <div className='banner-desc'>
       <div className='left'>
        {/* <p>{footerBanner.discount}</p> */}
        <p>{discount}</p>
        <h3>{largeText1}</h3>
        <h3>{largeText2}</h3>
        <h3>{saleTime}</h3>
       </div>

       <div className='right'>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <Link href={`/product/${product}`} >
        
        <button type='button'>{buttonText}</button>
        {/*Above link is Dynamic */}
        </Link>
       </div>

       <img src={urlFor(image)} className="footer-banner-image"/>
     </div>
    </div>
  )
}

export default FooterBanner