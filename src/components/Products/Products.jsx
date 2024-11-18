import React from "react";


const Products=(props)=>{
    // console.log(props.product)
   
    return(
        <div>
            <h1>I am Products name:{props.product.name}</h1>
            <h1>I am Products Price:{props.product.price}</h1>
            <button onClick={props.alert}>Clike Me</button>
        </div>
    )
}
export default Products