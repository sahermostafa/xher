import React, { useState, useEffect,useContext } from "react";
import { MenuList } from "../helpers/MenuList";
import{Container,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Menu.css";
import {AuthContext} from "./AuthContext";
function Menu() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const authContext = useContext(AuthContext);
  
  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    if (cart.length === 0){
      setCart([el]);
    }else{
      setCart([...cart, el]);
    }
    authContext.setAuth(cart);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = MenuList.map((el) => (
    <div key={el.id} >
      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
              ${el.price}
              </Card.Text>
              <Button variant="dark" onClick={() => addToCart(el)}>Add</Button>
            </Card.Body>
          </Card>
    </div>
  ));

  const cartItems = cart.map((el,index) => (
    <div key={index}>
      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
              ${el.price}
              </Card.Text>
              <Button variant="danger" onClick={() => removeFromCart(el)}>Remove</Button>
            </Card.Body>
          </Card>
    </div>
  ));

  return (
    <Container fluid>
      <div className="menu">
          <h1 className="menuTitle">STORE</h1>
          <div className="menuList">{listItems}</div>
          <h1 className="menuTitle">CART</h1>
          <div className="menuList">{cartItems}</div>
          <h1 className="menuTitle">Total: ${cartTotal}</h1>
      </div>
    </Container>
    
  );
}

export default Menu;
