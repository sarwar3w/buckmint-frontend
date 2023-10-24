import "./styles/global/_reset.scss";
import "./App.scss";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./Home/Home";
const App = () => {
  return (
    <main className='container'>
      <NavigationBar />
      <Home/>
    </main>
  );
};

export default App;
