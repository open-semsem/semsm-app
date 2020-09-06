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


export default function Pricing() {
  const [] = React.useState(2);

  const offers = [{
    title: "Start Version",
    message: "Free box for ERC20 & ERC721 token",
    price: "0$",
    isOutlined: false
  },
  {
    title: "Mid-Level Package",
    message: " + Start Version , We offer you blockchain project integrated with IPFS, Filecoin, ERC1155 token,  Provable & Chanlink ",
    price: "40$",
    isOutlined: true
  },
  {
    title: "High-Level Package",
    message: "+ Mid-Level Package, We offer very customized blockchain project for supply chain, health care, voting and more",
    price: "100$",
    isOutlined: false
  }
  ]
  return (

    <div className="section section-pink text-center">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title-pricing">Our Pricing</h2>
            {/* <p className="title-pricing">
              We are providing free and premium packages, you can choose between variety of options
          </p>
        */}
          </Col>
        </Row>
              <Row>
          {offers.map((value) => (
            <Col md="4" key={value.title}> 
              <Card className="card-profile pricing-card">

                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">{value.title}</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    {value.message}
                  </p>
                  <h4 className="danger-title">    {value.price}</h4>

                </CardBody>
                <CardFooter className="text-center">
                  <Button className={value.isOutlined?" btn-round btn-outline-danger":"bt-round btn-danger"} color="danger" href="#pablo">
                   Subscribe
                     </Button>
                </CardFooter>
              </Card>
            </Col>

          ))}


        </Row>
      </Container>
    </div>

  );
}

