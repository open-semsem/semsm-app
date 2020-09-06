import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Service() {
  // const [spacing, setSpacing] = React.useState(6);

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };
const service=[
  {
  title:"Workflow automation",
  message:"",
  src:"001-process.svg",
  isOutlined: false
},
  {
  title:"Interactive communication",
  message:"",
  src:"002-social-media.svg",
  isOutlined: true
},
  {
  title:"Ready to use Dapps",
  message:"",
  src:"004-social-media-1.svg",

  isOutlined: true
},
  {
  title:"Customizable deployment templates ",
  message:"",
  src:"003-responsive.svg",

  isOutlined: false,
}
]
  return (
    // <div>
    //      <Grid item xs={6} >

    // </Grid>
    // <Grid item xs={6}  calssName="menu_uj">
    // <Header/>
    // </Grid>
    // </div>
    <div className="section text-center">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">Our Service</h2>
          <h5 className="description">
          AI assistant for fast prototyping business ideas into a blockchain applications
          </h5>
   
        </Col>
      </Row>
     
      <Row>
      {service.map((value) => (
            <Col md="3" key={value.src}>
              <Card className="card-profile offer-card">
              <div className="card-image">
                       <img
                      src={require(`../../assets/pic/${value.src}`)} alt={value.title}
                      />
                    
                  </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">{value.title}</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    {value.message}
                  </p>
 
                </CardBody>
              
              </Card>
            </Col>

          ))}
   
     
      </Row>
    </Container>
  </div>

    
  );
}

