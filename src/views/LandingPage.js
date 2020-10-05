/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useTranslation } from 'react-i18next';

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import Subscribe from "../components/Subscribe/index.js";
import Products from "../components/products/index.js";
import About from "../components/about/index.js";
import Team from "../components/Team/Team.js";
import Footer from "../components/Footers/Footer.js";
import { ToastContainer, toast } from 'react-toastify';
import Semsm from "../components/bot/Semsm/Semsm.js";
import WorkCycle from "../components/bot/WorkCycle/index.js";
import Pricing from "../components/bot/Pricing/Pricing.js";
import Service from "../components/bot/Service/Service.js";
import 'react-toastify/dist/ReactToastify.css';
 
function LandingPage() {
  const { t } = useTranslation();
  const notify = () => toast(t('toast_msg'), {
    position: "top-right",
    autoClose: 50000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })();
  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("profile-page");
  //   return function cleanup() {
  //     document.body.classList.remove("profile-page");
  //   };
  // });
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {/* <MDBView src={require('../assets/pic/back-header.png')}>
</MDBView> */}
      <LandingPageHeader />

      <div className="main">
        <Semsm />
        <WorkCycle />

        <Service />
        <Pricing />
        <About />

        <Team />
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">{t('landing_keep_in_touch')}</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>{t('landing_keep_in_touch_name')}</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>{t('landing_keep_in_touch_email')}</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>{t('landing_keep_in_touch_message')}</label>
                  <Input
                    placeholder={t('landing_keep_in_touch_message_pholder')}
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                      {t('landing_keep_in_touch_message_send')}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>


          </Container>
        </div>
      </div>
      <Subscribe />
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
