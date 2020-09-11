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
import ChatBot from "react-simple-chatbot";

// core components
// import Chatbot from 'react-chatbot-kit'
// import ChatConfig from '../components/bot/chat-bot-data'
import SemsmNav from "components/Navbars/SemsmNav.js";
import Footer from "components/Footers/Footer.js";

import { ThemeProvider } from "styled-components";

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
  let pageHeader = React.createRef();

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
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

                  {/* <Chatbot config={ChatConfig.config} actionProvider={ChatConfig.ActionProvider} 	    messageParser={ChatConfig.MessageParser} /> */}
                  <ThemeProvider theme={theme}>
          <ChatBot
            // headerTitle="Semsm Chatbot"
            steps={[
              {
                id: "1",
                message: "Hey there, my name is Semsm & I’m here to help you.",
                trigger: "2",
              },
              {
                id: "2",
                message: "How can I help?",
                trigger: "3",
              },
              {
                id: "3",

                options: [
                  {
                    value: 1,
                    label: "I want to build a blockchain project",
                    trigger: "200",
                  },
                  {
                    value: 2,
                    label: "I want to Learn more about blockchain",
                    trigger: "404",
                  },
                  {
                    value: 3,
                    label: "I want to know what is the best blockchain network that suits my project",
                    trigger: "100",
                  },
                  {
                    value: 4,
                    label: "No, I have some feedback to leave you",
                    trigger: "4",
                  },
                ],
              },
              {
                id: "4",
                user: true,
                trigger: "5",
              },
              {
                id: "5",
                message:
                  "Thanks for the feedback, please leave your email and I'll get back to you on that.",
                trigger: "6",
              }

              ,
              {
                id: "6",
                user: true,
                end: true,
              }
              ,
              {
                id: "1000",
                user: true,
                end: true,
              }
              ,
              {
                id: "1001",
                message: "You don't need blockchain, Use database",
                trigger: "1000",
              }
              , {
                id: "100",
                message: "Did you need a database?",
                trigger: "101",
              },
              {
                id: "101",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    trigger: "102",
                  },
                  {
                    value: 2,
                    label: "No",
                    trigger: "1001",
                  },
                ],
              },
              {
                id: "102",
                message: "Are writers known and trust ? ",
                trigger: "104",
              },
              {
                id: "104",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    trigger: "105",
                  },
                  {
                    value: 2,
                    label: "No",
                    trigger: "107",
                  },
                ],
              },
              {
                id: "105",
                message: "Are writers interests unified?",
                trigger: "106",
              },
              {
                id: "106",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    trigger: "1001",
                  },
                  {
                    value: 2,
                    label: "No",
                    trigger: "107",
                  },
                ],
              },
              {
                id: "107",
                message: "Do you need/want to use a trusted third party?",
                trigger: "108",
              },
              {
                id: "108",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    trigger: "1001",
                  },
                  {
                    value: 2,
                    label: "No",
                    trigger: "109",
                  },
                ],
              }, {
                id: "109",
                message: "Should the record of transactions be immutable?",
                trigger: "110",
              },
              {
                id: "110",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    trigger: "1001",
                  },
                  {
                    value: 2,
                    label: "No",
                    trigger: "111",
                  },
                ],
              }
              , {
                id: "111",
                message: "Do you need control functionality?",
                trigger: "112",
              },
              {
                id: "112",
                options: [
                  {
                    value: 1,
                    label: "Yes",
                    trigger: "113",
                  },
                  {
                    value: 2,
                    label: "No",
                    trigger: "111",
                  },
                ],
              }


              , {
                id: "113",
                message: "Where is the consensus determined?",
                trigger: "114",
              },
              {
                id: "114",
                options: [
                  {
                    value: 1,
                    label: "Intra firm",
                    trigger: "115",
                  },
                  {
                    value: 2,
                    label: "Inter firm",
                    trigger: "117",
                  },
                ],
              }

              , {
                id: "115",
                message: "Use a private blockchain",
                trigger: "6",
              }

              , {
                id: "117",
                message: "Use a hybrid blockchain",
                trigger: "6",
              }
             
            
              , {
                id: "119",
                message: "Do you want your transaction to be private or public?",
                trigger: "120",
              },
              {
                id: "120",
                options: [
                  {
                    value: 1,
                    label: "Private",
                    trigger: "113",
                  },
                  {
                    value: 2,
                    label: "Public",
                    trigger: "121",
                  },
                ],
              }

              , {
                id: "121",
                message: "Use a public blockchain",
                trigger: "6",
              }
            
            // working on the creat project option 
            , {
              id: "200",
              message: "What type of project you want to build?",
              trigger: "201",
            },
            {
              id: "201",
              options: [
                {
                  value: 1,
                  label: "I want to create a token",
                  trigger: "202",
                },
                {
                  value: 2,
                  label: "I want to create a Voting app",
                  trigger: "404",
                },
                {
                  value: 3,
                  label: "I want to create a Supply chain project",
                  trigger: "404",
                },
              ],
            }
            , {
              id: "202",
              message: `This is my favorite part! I might need some details to give you the best result. There are many token standards; a token standard is a set of rules required to implement tokens. 
              . Do you know the standard you want to use or Would you like me to help with that? 
              `,
              trigger: "203",
            },
            {
              id: "203",
              options: [
                {
                  value: 1,
                  label:"Yes, I know ",
                  trigger: "1001",
                },
                {
                  value: 2,
                  label: " No, I have no idea ",
                  trigger: "204",
                },
                {
                  value: 3,
                  label: " Not sure, I would  prefer getting help from you",
                  trigger: "204",
                },
                
              ],
            }
            , {
              id: "204",
              message: `no worries, Is your token is a representation for a unique asset?`,
              trigger: "205",
            },
            {
              id: "205",
              options: [
                {
                  value: 1,
                  label: "Yes",
                  trigger: "206",
                },
                {
                  value: 2,
                  label: "No",
                  trigger: "111",
                },
              ],
            }
            , {
              id: "206",
              message: ` Do you want it to work as a balance?
              `,
              trigger: "207",
            },
            {
              id: "207",
              options: [
                {
                  value: 1,
                  label: "Yes",
                  trigger: "208",
                },
                {
                  value: 2,
                  label: "No",
                  trigger: "111",
                },
              ],
            }
            , {
              id: "206",
              message: `Well, the standard would be ERC20, you can read more about the standard though this link https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/
              `,
              trigger: "207",
            },
            {
              id: "207",
              options: [
                {
                  value: 1,
                  label: "Yes, it's ERC20",
                  trigger: "208",
                },
                {
                  value: 2,
                  label: "No, it is not",
                  trigger: "111",
                },
              ],
            }
            , {
              id: "208",
              message: `Would you please specify your token name?
             `,
              trigger: "209",
            },
            {
              id: "209",
             
                user: true,
                trigger: "210",
             
            }
            , {
              id: "210",
              message: `Would you please specify your token symbol?
             `,
              trigger: "211",
            },
            {
              id: "211",
             
                user: true,
                trigger: "212",
             
            }
            , {
              id: "212",
              message: `Would you please specify your token  decimal? The default is 18
             `,
              trigger: "213",
            },
            {
              id: "213",
             
                user: true,
                trigger: "210",
             
            }

            , {
              id: "404",
              message: "Under development ",
              trigger: "403",
            }

            ,
              {
                id: "403",
                message:
                  "Thanks for your interest, please leave your email and I'll get back to you when we support this feature.",
                trigger: "6",
              }
              ,
              {
                id: "300",
                user: true,
                end: true,
              }
            ]}
            botAvatar={require("assets/pic/logo.svg")}
            // floating
          />
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
    </>
  );
}

export default SemsmChat;
