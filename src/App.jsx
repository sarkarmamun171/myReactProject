import './App.css'
import Home from "./components/Home/Home";
import Blogs from './components/Blogs/Blogs';
import Service from './components/Service/Service';
import ExployData from './components/ExploryData/ExployData';


function App(){
  return(
    <div>
      <Home></Home>
      <Blogs></Blogs>
      <Service></Service>
      <ExployData name='Mamun' age='26'></ExployData>
      <ExployData name='Mamun01' age='27'></ExployData>
      <ExployData name='Mamun02' age='28'></ExployData>
      <ExployData name='Mamun03' age='29'></ExployData>
    </div>
  )
}

export default App;