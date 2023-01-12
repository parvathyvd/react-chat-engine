import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message attahcemnet"
        className="message-image"
        style={{
          float: "right",
        }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "#fff",
        backgroundColor: "#3b2a50",
      }}
    >
      {message.text.replace(/(<([^>]+)>)/gi, "")}
    </div>
  );
};

export default MyMessage;
