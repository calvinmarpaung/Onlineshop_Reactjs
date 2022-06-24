import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";
import Items from "./Pages/Items";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import {Routes, Route} from 'react-router-dom';
import React, { useState } from "react";
import MyNavbar from "./components/MyNavbar";
function App() {
  const [ cart, setCart ] = useState(['']);
  return (
    <div>
      <MyNavbar/>
      <Routes> 
        
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/items' element={<Items setCart={setCart}/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/cart'element= { <Cart cart={cart}/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>

  
      </Routes>
    </div>
  );
}

export default App;
