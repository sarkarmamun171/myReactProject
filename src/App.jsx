import { useRef } from "react";
import Hero from "./component/Hero";

const App = () => {
  let myHeadLine=useRef();
  const change=()=>{
    myHeadLine.current.innerText="MY Love for React Native";
  }

  return (
    <div>
      <h1 ref={myHeadLine}></h1>
      <button onClick={change}>Submit</button>
    </div>
  );
};

export default App;
