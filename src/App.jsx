import Hero from "./component/Hero";

const App = () => {
  const submitForm=(e)=>{
    e.preventDefault();
    alert('You clicked me');
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Name"/>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
