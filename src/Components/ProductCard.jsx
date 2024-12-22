import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../ContextAPI/Context';

export default function ProductCard({id ,product}) {

  let{setAddCart, addCart, totalPrice, setTotalPrice}=useContext(context);

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setAddCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (value) => {
    const productIndex = addCart.findIndex((item) => item.id === value.id);
    const price = Number(value.price);
  
    if (productIndex === -1) {
      const newProduct = {
        id: value.id,
        name: value.name,
        quantity: 1,
        price: price,
        image: value.image,
        href: '#',
        imageAlt: value.description,
        color: 'Salmon',
      };
  
      setAddCart((prevCart) => {
        const updatedCart = [newProduct, ...prevCart];
        saveCartToLocalStorage(updatedCart); // Save to localStorage
        return updatedCart;
      });
      setTotalPrice((prevTotal) => prevTotal + price);
    } else {
      setAddCart((prevCart) => {
        const updatedCart = prevCart.map((item, index) =>
          index === productIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveCartToLocalStorage(updatedCart); // Save to localStorage
        return updatedCart;
      });
      setTotalPrice((prevTotal) => prevTotal + price);
    }
  };
  
  


  return (
    <>
    <div key={id} className="  group relative">
                <img
                  alt={product.name}
                  src={product.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700"> 
                      <Link to={`/productDetails/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category_name}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  <button className='pointer-events-auto text-sm/6 font-semibold p-1 rounded bg-yellow-300 text-white hover:bg-lime-700' onClick={()=>{
                    addToCart(product)
                  }}>
                    Add to cart
                  </button>
                </div>
              </div>
    </>
  )
}
