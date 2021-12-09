import React from "react";
import {Container,Card} from 'react-bootstrap';
import MultiplePizzas from "../assets/about-bg.jpg";
import "./About.css";
function About() {
  return (
    <Container fluid>
      <div className="about">
         <Card style={{width:`100%`}}>
              <Card.Img variant="top" src={MultiplePizzas} />
                <Card.Body>
                    <Card.Title className='heade'>
                    Intro - E-ecomerce:
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, vero voluptatibus iusto iste maiores beatae asperiores,
                    accusantium dolorum aperiam debitis rerum excepturi esse quam pariatur corrupti praesentium? Eaque, consequuntur tempore.
                    </Card.Text>
                </Card.Body>
            </Card>
      </div>
    </Container>
    
  );
}

export default About;