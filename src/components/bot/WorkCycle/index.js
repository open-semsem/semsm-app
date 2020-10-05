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


    <div className="section section-x text-center">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">{t('landing_how_work_title')}</h2>
            <h5 className="description">
            {t('landing_how_work_subtitle')}
          </h5>

          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="4">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon nc-tap-01" />
              </div>
              <div className="description">
                <p className="description">
                {t('open_semsm')}

              </p>

              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon nc-chat-33" />
              </div>
              <div className="description">
                <p>
                {t('chat')}

              </p>

              </div>
            </div>
          </Col>
    
          <Col md="4">
            <div className="info">
              <div className="icon icon-danger">
                <i className="nc-icon nc-spaceship" />
              </div>
              <div className="description">
                <p>
                {t('get_service')}

              </p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>



  );
}


