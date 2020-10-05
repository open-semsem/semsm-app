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
import { useTranslation } from 'react-i18next';

const logoUrl = require('../../assets/pic/logo.svg');


export default function Products() {
  const { t } = useTranslation();


  return (

    <div className="section text-center" >
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            
            <h2 className=""> {t('landing_other_product_title')} </h2>
            {/* <p className="text-center text-muted">
            Semsm offers workflow automation tools that accelerate time to value when building blockchain based projects.
          </p> */}
       
          </Col>
        </Row>
              <Row>
         
     

            <Col md="12"> 
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
                  {t('landing_other_product_subtitle')}
                  </p>
                  <div className="info">
                  <div className="icon icon-danger">
                    <p>Install</p>              </div>

                  <div className="description">
                    <pre className="bd-semsm-code "><code>npm install @semsm/semsm-cli</code></pre>


                  </div>
                </div>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className=" btn-round btn-outline-danger" color="danger" href="https://github.com/open-semsem/semsm-cli">
                   {t('landing_other_product_view')}  <i className="fa fa-github" />
                   {t('github')}
                     </Button>
                </CardFooter>
              </Card>
            </Col>



        </Row>
      </Container>
    </div>

  );
}

