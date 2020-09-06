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
import Chatbot from 'react-chatbot-kit'
import ChatConfig from '../components/chat-bot-data'
import SemsmNav from "components/Navbars/SemsmNav.js";

 
function SemsmChat() {
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
       <SemsmNav />
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/pic/openSemem1306@2x.png") + ")",
        }}
        className="semsm-background"
        // data-parallax={true}
        ref={pageHeader}
      >

        <div className="">
          <Container>
            <Row>

               <Col md="12">

                <Row className="image-chat-popup-bg" style={{
                  backgroundImage:
                    "url(" + require("assets/pic/popup.png") + ")",
                }}>
            
                  <Col md="12" className="">
                  <h2 className="white-text text-center">Welcome to Semsm</h2>

                  <Chatbot config={ChatConfig.config} actionProvider={ChatConfig.ActionProvider} 	    messageParser={ChatConfig.MessageParser} />

                  </Col>


                  <Col>

                  </Col>
                </Row>
              </Col>


            </Row>
          </Container>
        </div>

     
      </div>
    </>
  );
}

export default SemsmChat;
