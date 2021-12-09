import React,{useState, useEffect,useContext} from 'react';
import Logo from "../assets/light-logo.png";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import{Container,Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import "./Navbara.css";
import {AuthContext} from "./AuthContext";
function Navbara() {
  const [count, setCount] = useState(0);
  const authContext = useContext(AuthContext);
  let carts = authContext.auth;
  useEffect(() => {
    total();
  }, [carts]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < carts.length; i++) {
      totalVal += 1;
    }
    return totalVal;
  };
  return (
   
    <Container fluid>
       <Navbar bg='dark' variant='dark' expand='lg'>
            
            <Navbar.Brand href='#'><img src={Logo}  style={{width:`100px`}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="me-auto">
                <Link className="styleLink"  to="/">Home</Link>
                <Link className="styleLink" to="/menu">Menu</Link>
                <Link className="styleLink" to="/about">About</Link>
                <Link className="styleLink" to="/contact">Contact</Link>
                <Link className="styleLink" to="/cart"><AddShoppingCart /><span>{total()}</span></Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}
export default  Navbara;