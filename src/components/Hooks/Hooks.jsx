import React, { useState } from "react";

const Hooks=()=>{
     const [price,setPrice] = useState(10);
     const increasedHandle =()=>{
        const newPrice = price+1;
        setPrice(newPrice);
     }
     const decresedHandle =()=>{
        const newPrice = price-1;
        setPrice(newPrice)
     }

    return(
        <div>
            <h1>Price :{price}</h1>
            <button type="button" onClick={increasedHandle}>Incresed</button>
            <button type="button" onClick={decresedHandle}>Decresed</button>
            <h2 onClick={increasedHandle}>Price :{price}</h2>
            <p onClick={increasedHandle}>Price :{price}</p>
            <h6 onClick={increasedHandle}>Price :{price}</h6>
        </div>
    )
}
export default Hooks