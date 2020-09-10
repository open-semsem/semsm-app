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
          <Col md="12">
            <Card className="card-profile card-plain">
              <div className="card-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("assets/pic/EmanInHongKong.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Eman Herawy</CardTitle>
                    <h6 className="card-category">Founder</h6>
                  </div>
                </a>
                <p className="card-description text-center">
                  Blockchain full stack developer .
                  Mentor & Reviewer @Udacity,
                  Devcon 5 scholar alumni @ethereum foundation,Truffle University alumni & MSc in Cloud computing networks.
                    </p>
              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="https://www.linkedin.com/in/emanherawy"
                // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-linkedin" />
                </Button>
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="https://twitter.com/@eman_herawy"
                // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="https://medium.com/@emanherawy"
                // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-medium" />
                </Button>
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="https://www.upwork.com/freelancers/~01edc5405b9c4be8a2"
                // onClick={(e) => e.preventDefault()}
                >
                  <i className="fa" >
                    <img
                      alt="Operation"
                      src={require('../../assets/pic/upwork-icon.svg')}

                    />
                  </i>
                </Button>


              </CardFooter>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>



  );
}

