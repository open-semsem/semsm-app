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
  // Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useTranslation } from 'react-i18next';

// core components
// import Chatbot from 'react-chatbot-kit'
// import ChatConfig from '../components/bot/chat-bot-data'
 import Footer from "../components/Footers/Footer.js";
import SemsmBot from "../components/bot/chat-bot-data/index";

import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const theme = {
  background: "#f5f8fb",
  // headerFontColor: "#fff",
  // headerBgColor: "#090705",
  botBubbleColor: "#D53934",
  userBubbleColor: "#6A1C23",
  userFontColor: "#fff",
  botFontColor: "#fff",
};
function SemsmChat() {
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
   let pageHeader = React.createRef();

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

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
      <div
        style={{
          backgroundImage:
            "url(" + require("../assets/pic/openSemem1306@2x.png") + ")",
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
                    "url(" + require("../assets/pic/popup.png") + ")",
                }}>

                  <Col md="12" className="">
                    <h2 className="white-text text-center title-txt">{t('chat_welcome')}</h2>

                    {/* <Chatbot config={ChatConfig.config} actionProvider={ChatConfig.ActionProvider} 	    messageParser={ChatConfig.MessageParser} /> */}
                    <ThemeProvider theme={theme}>
                   <SemsmBot/>
                    </ThemeProvider>
                  </Col>


                  <Col>

                  </Col>
                </Row>
              </Col>


            </Row>
          </Container>
        </div>


      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SemsmChat;
