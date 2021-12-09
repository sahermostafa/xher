import React from "react";
import { Container } from "react-bootstrap";
import HomeImage from "../assets/header.png";
import "./Index.css";
import {Link} from "react-router-dom";


function Index() {
  return (
    <Container fluid>
      <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
        <div className="headerContainer">
          <h1>WELCOM </h1>
          <p>E-ecomerce Simple</p>
          <Link to="/menu">
            <button> Order Memu Now </button>
          </Link>
        </div>
      </div>
    </Container>
    
  );
}

export default Index;
