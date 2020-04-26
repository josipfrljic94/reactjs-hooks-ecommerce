import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import './custom.scss';


import OurProduct from './pages/OurProduct';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Item from './pages/Item';
import MyNavbar from './components/MyNavbar';



function App() {
  
  return (
    

   
    <div className="App">
     
      <MyNavbar/>
      <Switch>
        <Route exact path='/'><Home/></Route> 
        <Route exact path='/ourproduct/:productsType'><OurProduct/></Route> 
        <Route exact path='/cart'><Cart/></Route> 
        <Route exact path='/detail/:slug'><Item/></Route> 
      

     </Switch>
    </div>
   
  );
}

export default App;
