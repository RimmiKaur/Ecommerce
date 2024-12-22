import React, { createContext, useState } from 'react'
import { data } from 'react-router-dom';

const context= createContext();

export default function Context({children}) {

    let [addCart, setAddCart]=useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // Track total price

    
    const data={addCart,setAddCart,totalPrice, setTotalPrice};

  return (
    <context.Provider value={data}>
        {children}
    </context.Provider>
  )
}

export {context};
