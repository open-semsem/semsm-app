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
const imgUrl = require('../../../assets/pic/logo.svg');

function Semsm() {
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
    <React.Fragment>
      <div
        style={{
          backgroundImage:
            "url(" + require("../../../assets/pic/semsm-home-cave.png") + ")",
        }}
        className="section-image"
        // data-parallax={true}
        ref={pageHeader}
      >

        <div className="text-center">
          <Container>
            <Row>

              <Col md="1"></Col>
              <Col md="10">

                <Row className="image-popup-bg" style={{
                  backgroundImage:
                    "url(" + require("../../../assets/pic/popup.png") + ")",
                }}>
                  <Col md="12" className="popup-img-container">
                    <img className="img-semsm "
                      alt="Operation"
                      src={imgUrl}

                    />
                  </Col>
                  <Col md="12" className="popup-txt-container">
                  <h1 className="white-text text-center">{t('app_name')}</h1>
                  <br/>
              <p className="white-text text-center">{t('landing_semsm_subtitle_desc')}</p>
              <p className="white-text text-center">{t('landing_semsm_subtitle_desc2')}</p>
                     <h2 className="white-text text-center"> {t('open_just_semsm')}</h2>
                  <br/>
                  <br/>
                    <Button
                      className="btn btn-danger"
                      href="/chat"
                      // onClick={(e) => e.preventDefault()}
                    >
                     {t('open_semsm')}   </Button>
                  </Col>


                  <Col>

                  </Col>
                </Row>
              </Col>


            </Row>
          </Container>
        </div>

     
      </div>
    </React.Fragment>
  );
}

export default Semsm;
