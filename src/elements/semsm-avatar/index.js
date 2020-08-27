import React from "react";
const logoUrl = require('../../assets/pic/logo.svg');

const SemsmAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <div className="react-chatbot-kit-chat-bot-avatar-icon">
        <img className="bot-avatar"
                    alt="Semsm"
                    src={logoUrl}
                    
                />
          
          </div>
      </div>
    </div>
  );
};

export default SemsmAvatar;
