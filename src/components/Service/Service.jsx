import React from "react";
import './Service.css'
const Service = ()=>{
    function update(){
        const service = document.getElementById('service');
        service.innerText = "Hello i am next compo";
    }
    return(
        <div>
            <h2 id="service">I am Service Components</h2>
            <button onClick={update} className="button-me">Click Me</button>
        </div>
    )
}
export default Service;