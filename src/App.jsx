import { useRef } from "react";
import Hero from "./component/Hero";

const App = () => {
  let myImg=useRef();
  const change=()=>{
    myImg.current.src="https://placehold.co/600x400/EEE/31343C";
  }

  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default App;
