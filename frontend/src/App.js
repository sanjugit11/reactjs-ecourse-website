import React from 'react';
// import Data from './Data';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter , Route ,Link} from 'react-router-dom';

import './App.css';

function App() {
 const openMenu = () => {
  document.querySelector(".sidebar").classList.add('open');
 }
 const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove('open');
 }
 return (
  
   <BrowserRouter>
    <div className="grid-container">
     <header className="header">
      <div className="brand">
       <button onClick={openMenu} className="burgerbtn">
        &#9776;
        </button>
       <Link to="/" > Ecorsepreneur</Link>
       {/* <a href="index.html">AMAZONA</a> */}
      </div>
      <div className="header-links">
       <a href="signin">Signin</a>
       <a href="cart.html">Cart</a>
      </div>
     </header>
     <aside className="sidebar">
      <h3> Shopping Catogries</h3>
      <button className="sidebar-close-button" onClick={closeMenu}> x</button>
      <ul>
       <li>
        <a href="index.html"> Pant</a>
       </li>
       <li>
        <a href="index.html"> shirt</a>
       </li>
      </ul>

     </aside>

     <main className="main">
      <div className="content">
       <Route path ="/product/:id" component={ProductScreen} />
       <Route path="/" exact={true} component={HomeScreen} />

      </div>

     </main>
     <footer className="footer">
      All right reserve
    </footer>
    </div>
   </BrowserRouter>
  
 );
}

export default App;
