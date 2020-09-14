import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
const logoUrl = require('../../assets/pic/logo.svg');


export default function Products() {
 

  return (

    <div className="section section-nude text-center">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title-pricing">Semsm's Tools </h2>
            <p className="text-center text-muted">
            Semsm offers workflow automation tools that accelerate time to value when building blockchain based projects.
          </p>
       
          </Col>
        </Row>
              <Row>
         
            <Col md="6"> 
              <Card className="card-plain pricing-card">

                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">
                      <img className="bot-avatar"
                    alt="Semsm"
                    src={logoUrl}
                    
                />
                        Semsm Bot</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center ">
                  For fast prototyping your business idea into tangible blockchain project trough a friendly chatbot, so you can get your blockchain project in few minutes rather than months of development, Semsm will also help you validate whether your idea is a good blockchain use case or not.
                  </p>
 
                </CardBody>
                <CardFooter className="text-center">
                  <Button className=" btn-round btn-outline-danger" color="danger" href="/semsm-bot">
                   View Details
                     </Button>
                </CardFooter>
              </Card>
            </Col>


            <Col md="6"> 
              <Card className="card-plain pricing-card">

                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">
                      <img className="bot-avatar"
                    alt="Semsm"
                    src={logoUrl}
                    
                />
                        Semsm CLI</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                  Semsm offers a utility to auto generate the web3 functions for developers, so you can get your web3 functions in a minute rather than hours regardless of the the number of smart contracts or number of functions in each smart contract.

                  </p>
 
                </CardBody>
                <CardFooter className="text-center">
                  <Button className=" btn-round btn-outline-danger" color="danger" href="/semsm-cli">
                   View Details
                     </Button>
                </CardFooter>
              </Card>
            </Col>



        </Row>
      </Container>
    </div>

  );
}

