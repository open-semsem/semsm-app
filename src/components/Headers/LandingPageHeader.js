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
  Container,
  Row,
  Col,
} from "reactstrap";
import { useTranslation } from 'react-i18next';

// core components
const logoUrl = require('../../assets/pic/operation.png');

function LandingPageHeader() {
  const { t } = useTranslation();

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("../../assets/pic/back-header.png") + ")",
        }}
        className="page-header"
        // data-parallax={true}
        ref={pageHeader}
      >

        <div className="home">
          <Container className="container-semsm">
            <Row>


              <Col md="6">
                <h2 className="home-data-h1"> {t('landing_main_title')} </h2>

                <Row>

                  <Col md="1">
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </Col>
                  <Col md="1">
                    <div></div>
                  </Col>
                  <Col md="10">
                    <br />
                    <p className="home-text">
                    {t('landing_main_subtitle_consult')}
                    </p>
                    <p className="home-text">
                    {t('landing_main_subtitle_dapp')}
                    </p>
                    <p className="home-text">
                    {t('landing_main_subtitle_edu')}
                    </p>
                   <br/>
                    <Button
                      className="btn btn-danger"
                      href="/chat"
                      // onClick={(e) => e.preventDefault()}
                    >
                     {t('open_semsm')}                   </Button>
               
                  </Col>

                </Row>

              </Col>
              <Col md="6">

                <img className="img-thumbnail "
                  alt="Operation"
                  src={logoUrl}

                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* <div className="" />
        <Container>
        <Row>
          <Col  md="8">
          <HomeDetails/>
          </Col>
          <Col  md="2">
           </Col>
        </Row>
        </Container> */}
      </div>
    </>
  );
}

export default LandingPageHeader;
