import './App.css'
import Home from "./components/Home/Home";
import Blogs from './components/Blogs/Blogs';
import Service from './components/Service/Service';
import ExployData from './components/ExploryData/ExployData';
import Products from './components/Products/Products';


function App(){
  const products =[
    {name:'Nokia',price:1500},
    {name:'Samsung',price:1700},
    {name:'Vivo',price:17000}
  ]
  const alertkk=()=>{
    alert('HandSet')
} 
  return(
    <div>
      {
        products.map(product =><Products
          product = {product}
          alert = {alertkk}
        ></Products>)
      }
    </div>
  )
}

export default App;