import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

  
  export default function ProductListing({title, type}) {

    const [products,setProducts]=useState([]);

    // const getProducts= async()=>{
    //   var products = await fetch('https://dummyjson.com/products?limit=12');
    //   var products= await products.json();
    //   setProducts(products.products);
    //   console.log(products.products);
    // }

    // getProducts();

    useEffect(()=>{
    
      axios.get('https://wscubetech.co/ecommerce-api/products.php?limit=20').
      then((success)=>{
        setProducts(success.data.data);
      }).
      catch((error)=>{
        console.log(error);
        })
    },[])
  

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">{title}</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  