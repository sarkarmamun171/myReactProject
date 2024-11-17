import './App.css'
import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Home from "./components/Home/Home";
import Blogs from './components/Blogs/Blogs';
import { reactRefresh } from 'eslint-plugin-react-refresh';


function App(){
  return(
    <div>
      <Home></Home>
      <Blogs></Blogs>
    </div>
  )
}

export default App;