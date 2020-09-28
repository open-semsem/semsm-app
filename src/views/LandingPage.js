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

// core components
import SemsmNav from "components/Navbars/SemsmNav.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
 import Subscribe from "components/Subscribe/index.js";
import Products from "components/products/index.js";
import About from "components/about/index.js";
import Team from "components/Team/Team.js";
import Footer from "components/Footers/Footer.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast('🦄 Hey, Semsm is still in alpha version and under active developing ', {
    position: "top-right",
    autoClose: 50000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
function LandingPage() {
  notify();
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <SemsmNav />
      <ToastContainer
    position="top-right"
    autoClose={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
  />
      <LandingPageHeader />
    
      <div className="main">
      
   <About/>
   <Products/>
      <Team />
      <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
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
                      <label>Email</label>
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
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
      
      
          </Container>
        </div>
      </div>
      <Subscribe/>

      <Footer />
    </>
  );
}

export default LandingPage;
