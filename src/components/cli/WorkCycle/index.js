import React from 'react';
import {
  // Button,
  CardBody,
  Card,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function WorkCycle() {

  return (


    <div className="section section-x text-center">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">How it Works</h2>
            <h5 className="description">
              Semsm offers a utility to auto generate the web3 functions for developers, so you can get your web3 functions in a minute rather than hours regardless of the the number of smart contracts or number of functions in each smart contract.
          </h5>

          </Col>
        </Row>
        <br />
        <br />
        <Row>

          <Col md="4">
            <Card className="card-profile offer-card">
              <CardBody>
                <div className="info">
                  <div className="icon icon-danger">
                    <p>Install</p>              </div>

                  <div className="description">
                    <pre class="bd-semsm-code "><code>npm install @semsm/semsm-cli</code></pre>


                  </div>
                </div>
              </CardBody>

            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile offer-card">
              <CardBody>
                <div className="info">
                  <div className="icon icon-danger">
                    <p>Generate</p>              </div>

                  <div className="description">
                  <pre class="bd-semsm-code "><code>semsm  -d YOUR_ARTIFACT_PATH  -p YOUR_PROVIDER</code></pre>


                  </div>
                </div>
              </CardBody>

            </Card>
          </Col>
          <Col md="4">
            <Card className="card-profile offer-card">
              <CardBody>
                <div className="info">
                  <div className="icon icon-danger">
                    <p>Use</p>              </div>

                  <div className="description">
                  <p>call the generated functions as easy as you are calling normal JS async functions </p>


                  </div>
                </div>
              </CardBody>

            </Card>
          </Col>
   
    



        </Row>
      </Container>
    </div>



  );
}


