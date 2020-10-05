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



export default function Pricing() {
  const { t } = useTranslation();

  const offers = [{
    title: t('landing_pricing_start'),
    message: t('landing_pricing_start_details'),
    price: "0$",
    isOutlined: false
  },
  {
    title: t('landing_pricing_mid'),
    message: t('landing_pricing_mid_details'),
    price: t('landing_pricing_soon'),
    isOutlined: true
  },
  {
    title: t('landing_pricing_high'),
    message: t('landing_pricing_high_details'),
    price: t('landing_pricing_soon'),
    isOutlined: false
  }
  ]
  return (

    <div className="section section-pink text-center" id="pricing">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title-pricing">{t('landing_pricing_title')}</h2>
            <br/>
            <p className="text-muted">
            {t('landing_pricing_subtitle')}
          </p>
       
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
                  {t('subscribe')}
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

