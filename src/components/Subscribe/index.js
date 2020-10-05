import React from 'react';
import {
    // Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useTranslation } from 'react-i18next';

export default function WorkCycle() {
  const { t } = useTranslation();

  return (


    <div className="section section-nude text-center">
    <Container>
    <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="text-center"> {t('menu_subscribe')}</h2>
       <div>
       <iframe src="https://semsm.substack.com/embed" width="100%" height="320" style={{border:'1px solid #EEE', background:'white'}} frameBorder="0" scrolling="no"></iframe>
            
       </div>
         </Col>
            </Row>
   </Container>
  </div>


    
  );
}


