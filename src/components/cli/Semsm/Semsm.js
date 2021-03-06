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
// core components
const imgUrl = require('../../../assets/pic/logo.svg');

function Semsm() {
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
            "url(" + require("../../../assets/pic/openSemem1306@2x.png") + ")",
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
                    <h1 className="white-text text-center">Semsm CLI</h1>
                    <br />
                    <p className="white-text text-center">           Semsm offers a utility to auto generate the web3 functions for developers, so you can get your web3 functions in a minute rather than hours regardless of the the number of smart contracts or number of functions in each smart contract. </p>

                    <br />
                    <br />
                    <pre className="bd-semsm-code"><code>npm install @semsm/semsm-cli</code></pre>
      <br/>
      <a href="https://github.com/open-semsem/semsm-cli" className="btn btn-outline-danger ">GITHUB REPO</a>
      
      <a href="https://github.com/open-semsem/semsm-cli" className="btn btn-outline-danger">DOCS</a>
    
                    {/* <Button
                      className="btn btn-danger"
                      href="/chat"
                    // onClick={(e) => e.preventDefault()}
                    >
                      OPEN SEMSM                    </Button> */}
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
