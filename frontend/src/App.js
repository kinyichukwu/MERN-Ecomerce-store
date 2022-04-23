import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Product from './components/Product';
import data from './data';


function App() {
  return (
    <BrowserRouter>
     <div className="grid-container">
        <header>
            <div>
                <a href="/">AMX</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>

        <main>
             <Route path='/product/:id' component={ProductScreen} exact></Route>
            <Route path='/' component={HomeScreen} exact></Route>
            <div className="row center">
                {
                  data.products.map( (product) => (
                    <Product  key = {product._id} product = {product} />
                  ))
                }
               
            </div>
        </main>

        <footer className="row center">
            All Rights Reserved
        </footer>
    </div>
   </BrowserRouter>
  );
}

export default App;
