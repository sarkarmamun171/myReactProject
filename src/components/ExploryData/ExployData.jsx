import React from "react";
const expolyDate ={
    border:'2px solid aqua',
    padding:'50px 100px',
    backgroundColor:'Cyan',
    margin:'30px'
}
const ExployData = (props)=>{
   
    return(
        <div style={expolyDate}>
            <h4>Expoly Data for Dynamic</h4>
            <h5>Name:{props.name}</h5>
            <p>Age:{props.age}</p>
        </div>
    )
}
export default ExployData