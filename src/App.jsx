
const App = () => {
 const isLogin = false;
  switch (isLogin) {
    case true:
        return <button>Logout</button>
  case false:
    return <button>Login</button>
    default:
      return null;
  }
};

export default App;
