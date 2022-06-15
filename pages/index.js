// import all the Components from the index.js in component Folder

import React from 'react'

import { client } from '../lib/client'
import {Product,FooterBanner,HeroBanner} from '../components'


const Home = ({products, bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
    
     <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
     </div>
     
     <div className='products-container'>
    {/* Fake Product as we hv not taken data from sanity */}

    {products?.map((product) => <Product key={product.id} product={product}/>)}
    {/* (Ctrl + click on Product) to get to the product file*/}
    
    {/*Above used is loop to add projects  */}
     </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  // * means to fetch all data using the API
  // this above line says get all products from sanity dashboard.
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { 
    props : { products , bannerData }
  }

}

export default Home
