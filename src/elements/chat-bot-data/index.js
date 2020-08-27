  // Config starter code
  import React from 'react'

  import {
    createChatBotMessage
  } from "react-chatbot-kit";
  import SemsmAvatar from "../semsm-avatar";

  // MessageParser starter code
  class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }

    parse = (message) => {
      const lowerCase = message.toLowerCase();

      if (
        lowerCase.includes("messageparser") ||
        lowerCase.includes("parse") ||
        lowerCase.includes("parser") ||
        lowerCase.includes("message parser")
      ) {
        return this.actionProvider.handleMessageParser();
      }
      return this.actionProvider.handleDefault();
    };

    // call the bot api here then push the result to bot state 
  }


  // ActionProvider starter code
  class ActionProvider {
    // The action provider receives createChatBotMessage which you can use to define the bots response, and 
    // the setState function that allows for manipulating the bots internal state.
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleMessageParser = () => {
      const messages = this.createChatBotMessage(
        "The message parser controls how the bot reads input and decides which action to invoke.",
        { widget: "messageParser", withAvatar: true }
      );
  
      this.addMessageToBotState(messages);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage("How can I help?", {
        withAvatar: true,
      });
  
      this.addMessageToBotState(message)
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  }

  const config = {
    botName: "Semsm",
    initialMessages: [
      createChatBotMessage(
        `Hey there, my name is Semsm & I’m here to help you.`
      ),
      createChatBotMessage(
        " I can help you to transform your idea into blockchain project", {
          withAvatar: true
        }
      ),
    ],

    customComponents: {
      // Replaces the default bot avatar
      botAvatar: (props) => < SemsmAvatar {
        ...props
      }
      />,
      // Replaces the default bot chat message container
      // botChatMessage: (props) => <CustomChatMessage {...props} />,
      // Replaces the default user icon
      //   userAvatar: (props) => <MyUserAvatar {...props} />,
      // Replaces the default user chat message
      // userChatMessage: (props) => <MyUserChatMessage {...props} />
    },
    // customStyles: {
    //   botMessageBox: { 
    //     width:"300px",
    //     //backgroundColor: "#D53934", 
    //     borderRadius: "25px",
    //     // padding: "10px",  font: "Muli", fontSize: "20px/25px", color: "#130006", fontWeight: "normal", position: "relative", width: "284.5px", marginLeft: "auto", textAlign: "left", opacity: "1"
    //    },
    //   // botMessageBox: {
    //   //   backgroundColor: "#D53934",
    // 	// 	borderRadius:" 30px",
    // 	// 	opacity: "0.3",
    //   // },
    //   chatButton: {
    //     backgroundColor: "#D53934",

    //   },
    // },
  }
  const ChatConfig = {
    MessageParser,
    ActionProvider,
    config
  }
  export default ChatConfig