import Hero from "./component/Hero";

const App = () => {
 const ItemObj={
  name:'Mamun',
  age:30,
 }
  return (
    <div>
    <Hero Item={ItemObj}/>
    </div>
  );
};

export default App;
