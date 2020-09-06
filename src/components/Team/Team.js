import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  CardFooter,
  Row,
  Button,
  Col,
} from "reactstrap";

export default function Team() {


  return (

    <div className="section section-dark text-center">
      <Container>
        <h2 className="title">Our Team</h2>
        <Row>
          <Col md="6">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  {/* <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      /> */}
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Eman Herawy</CardTitle>
                    {/* <h6 className="card-category">Product Manager</h6> */}
                  </div>
                </a>
                <p className="card-description text-center">
                  Blockchain full stack developer .
                  Mentor & Reviewer @Udacity
                  Devcon 5 scholar alumni @ethereum foundation,Truffle University alumni, MSc in Cloud computing networks.
                    </p>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="https://twitter.com/@eman_herawy"
                  // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
              
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="https://www.linkedin.com/in/emanherawy"
                  // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-linkedin" />
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  {/* <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      /> */}
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Maged M. El Jazzar</CardTitle>
                    {/* <h6 className="card-category">Designer</h6> */}
                  </div>
                </a>
                <p className="card-description text-center">
                Former CTO Tradeflo - IBM incubated startup in 2019, and teach lead in Deep Cloud AI - AI driven decentralized cloud computing system. Has several publications and MSc degree in AI and Blockchain.
                    </p>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="https://twitter.com/@mmeljazzar"
                  // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
             
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="https://www.linkedin.com/in/mmjazzar/ "
                  // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-linkedin" />
                </Button>
              </CardFooter>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </div>



  );
}

