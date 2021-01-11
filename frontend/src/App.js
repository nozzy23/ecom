import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from 'react';

function App() {
  const [sideToggle, setSideToogle] = useState(false);

  return (
    <Router>
    <Navbar click= {()=> setSideToogle(true)}/>
    <SideDrawer show={sideToggle}/>
    <Backdrop show={sideToggle} click={() => setSideToogle(false)}/>
    <main>
      <Switch>
        <Route exact path ="/" component={HomeScreen}/>
        <Route exact path ="/product/:id" component={ProductScreen}/>
        <Route exact path ="/cart" component={CartScreen}/>
        </Switch>
    </main>
    </Router>
  );
}

export default App;
