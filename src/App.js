import React from 'react';
import{} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbara from "./Component/Navbara";
import Contact from "./Component/Contact";
import Index from "./Component/Index";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";
import {AuthProvider} from "./Component/AuthContext";

import {BrowserRouter,Route} from "react-router-dom";

function APP() {
  return (
    
    <div>
      <BrowserRouter>
        <Navbara />
        <Route exact path="/" component={Index} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Footer />
        
    </BrowserRouter>

    </div>
  
        
  );
}
function AppWithStore(){
  return (<AuthProvider>
    <APP />
  </AuthProvider>);
}

export default AppWithStore;
