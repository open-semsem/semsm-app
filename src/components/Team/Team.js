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
import { useTranslation } from 'react-i18next';

export default function Team() {
  const { t } = useTranslation();


  return (

    <div className="section section-dark text-center">
      <Container>
        <h2 className="title"> {t('landing_team')}</h2>
        <Row>
          <Col md="12">
            <Card className="card-profile card-plain">
              <div className="card-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("../../assets/pic/EmanInHongKong.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4"> {t('landing_team_eman')}</CardTitle>
                    <h6 className="card-category"> {t('landing_team_eman_position')}</h6>
                  </div>
                </a>
                <p className="card-description text-center">
              {t('landing_team_eman_details')} </p>
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

