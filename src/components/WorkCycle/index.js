import React from 'react';
import {
    Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function WorkCycle() {

  return (


    <div className="section section-nude text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">How it Works</h2>
          <h5 className="description">
          Semsm offers ready-to-go blockchain projects through AI in several minutes rather than months .

          </h5>
      
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md="3">
          <div className="info">
            <div className="icon icon-danger">
              <i className="nc-icon nc-tap-01" />
            </div>
            <div className="description">
               <p className="description">
              Open Semsm 

              </p>
            
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="info">
            <div className="icon icon-danger">
              <i className="nc-icon nc-chat-33" />
            </div>
            <div className="description">
               <p>
               Explain your idea in user friendly way

              </p>
              
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="info">
            <div className="icon icon-danger">
              <i className="nc-icon nc-settings-gear-65" />
            </div>
            <div className="description">
               <p>
              Configure your application

              </p>
             
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="info">
            <div className="icon icon-danger">
              <i className="nc-icon nc-spaceship" />
            </div>
            <div className="description">
               <p>
              Get notified when app is developed and ready.

              </p>
              
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>


    
  );
}


