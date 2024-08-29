const App = () => {
  let status=false;
  return (
    <div>
      {
        status?
        <button>Logout Btn</button>
        :
        <button>Login Btn</button>
      }
    </div>
  );
};

export default App;
