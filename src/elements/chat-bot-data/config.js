// import React from "react";
// import { createChatBotMessage } from "react-chatbot-kit";
// import SemsmAvatar from '../semsm-avatar'

// // import SingleFlight from './components/SingleFlight/SingleFlight'

// const botName = "Semsm";

// const config = {
//     // Defines the chatbot name
//     botName: botName,
//     // Defines an array of initial messages that will be displayed on first render
//     initialMessages: [
//         createChatBotMessage(`Hi I'm ${botName}`),
//         createChatBotMessage(
//             "Hey there, my name is Semsm & I’m here to help you. I can help you with transforming your idea into blockchain project",
//             //   {
//             //     widget: "airportSelector",
//             //     delay: 500,
//             //   }
//         ),
//     ],
//     // Defines an object that will be injected into the chatbot state, you can use this state in widgets for example
//     //   state: {
//     //     airports: [],
//     //     flightType: "",
//     //     selectedFlightId: "",
//     //     selectedFlight: null,
//     //   },
//     // Defines an object of custom components that will replace the stock chatbot components. 
//     customComponents: {
//         // Replaces the default bot avatar
//         botAvatar: (props) => <SemsmAvatar {...props} />,
//         // Replaces the default bot chat message container
//         botChatMessage: (props) => <CustomChatMessage {...props} />,
//         // Replaces the default user icon
//         userAvatar: (props) => <MyUserAvatar {...props} />,
//         // Replaces the default user chat message
//         userChatMessage: (props) => <MyUserChatMessage {...props} />
//     },
//     // Defines an object of custom styles if you want to override styles
//     customStyles: {

//         // Overrides the chatbot message styles
//         botMessageBox: { "backgroundColor": "#D53934", "padding": "10px", "borderRadius": "25px", "font": "Muli", "fontSize": "20px/25px", "color": "#130006", "fontWeight": "normal", "position": "relative", "width": "184.5px", "marginLeft": "auto", "textAlign": "left", "opacity": "1" },
//         // Overrides the chat button styles
//         chatButton: {
//             backgroundColor: "#5ccc9d",
//         },
//     }
//     // Defines an array of widgets that you want to render with a chatbot message
//     //   widgets: [
//     //     {
//     //       // defines the name you will use to reference to this widget in "createChatBotMessage".
//     //       widgetName: "singleFlight",
//     //       // Function that will be called internally to resolve the widget
//     //       widgetFunc: (props) => <SingleFlight {...props} />,
//     //       // Any props you want the widget to receive on render
//     //       props: {},
//     //       // Any piece of state defined in the state object that you want to pass down to this widget
//     //       mapStateToProps: [
//     //         "selectedFlightId",
//     //         "selectedFlight",
//     //       ],
//     //     },
//     //   ],
// };

// export default config;