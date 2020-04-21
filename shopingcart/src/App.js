import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
     <Navbar/>
                <Switch>
                     <Route exact path="/" component={Home}/>
                      <Route path="/cart" component={Cart}/>
                  </Switch>
    </div>
  );
}

export default App;
