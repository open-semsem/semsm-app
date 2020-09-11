import React from 'react';
import {
    // Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function WorkCycle() {

  return (


    <div className="section section-nude text-center">
    <Container>
    <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="text-center">Subscribe?</h2>
       <div>
       <iframe src="https://semsm.substack.com/embed" width="100%" height="320" style={{border:'1px solid #EEE', background:'white'}} frameborder="0" scrolling="no"></iframe>
            
       </div>
         </Col>
            </Row>
   </Container>
  </div>


    
  );
}


