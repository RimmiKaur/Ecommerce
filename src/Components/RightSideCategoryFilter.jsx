import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function RightSideCategoryFilter({sorting, filterCategory, filterBrand,filterPrice,filterdiscount,filterRating}) {
 
    const[products, setProducts]=useState([]);


    useEffect(()=>{
        axios.get('https://wscubetech.co/ecommerce-api/products.php',{
            params:{
                limit:15,
                sorting: sorting,
                categories: filterCategory.toString(),
                brands: filterBrand.toString() ,
                price_from: filterPrice[0],
                price_to: filterPrice[1],
                discount_from: filterdiscount[0],
                discount_to: filterdiscount[1],
                rating: filterRating
                
            }

        }).
        then((sucess)=>{
    
            setProducts(sucess.data.data)
        }).catch((error=>{

        }))
    },[sorting,filterCategory,filterBrand,filterPrice,filterdiscount,filterRating]);
 
    return products.length > 0 ? (
        <div className="lg:col-span-3">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className='text-[30px]'>No Products Found</h1>
      );

}
