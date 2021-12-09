import React, { useState, useEffect,useContext } from "react";
import "./Menu.css";
import{Container,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContext} from "./AuthContext";

const Cart = () => {
  const authContext = useContext(AuthContext);
  const [cartTotal, setCartTotal] = useState(0);
  let carts = authContext.auth;
  useEffect(() => {
    total();
  }, [carts]);
  console.log(carts);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < carts.length; i++) {
      totalVal += carts[i].price;
    }
    setCartTotal(totalVal);
  };
  const removeFromCart = (el) => {
    let hardCopy = [...carts];
      hardCopy.splice(el,1);
    
    authContext.setAuth(hardCopy);
  };
  const removeBuy = () => {
    authContext.setAuth([]);

  }
 
  const cartItems = carts.map((el,index) => (
    <div key={index}>      
      <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.image} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
              ${el.price}
              </Card.Text>
              <Button variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
            </Card.Body>
      </Card>
    </div>
  ));
return (
  <Container fluid>
      <div className="menu">
          <h1 className="menuTitle">CART</h1>
          <div className="menuList">{cartItems}</div>

          <h1 className="menuTitle">Total: ${cartTotal}</h1>
          <button className="buttons" onClick={() => removeBuy()}>BUY</button>
          <div></div>
      </div>
    </Container>
   
  );
};
//<div className="menuList">{cartItems}</div>

export default Cart ;