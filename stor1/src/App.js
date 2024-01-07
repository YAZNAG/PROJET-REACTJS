import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Product/ProductDetail';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
   
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/product/:productId" component={ProductDetail} />
          </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
