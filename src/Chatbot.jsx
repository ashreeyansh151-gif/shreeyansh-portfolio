import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "#D4AF37",
          color: "#000",
          fontSize: "25px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "95px",
            right: "25px",
            width: "350px",
            height: "450px",
            background: "#111",
            border: "1px solid #D4AF37",
            borderRadius: "15px",
            zIndex: 9999,
            color: "white",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "#D4AF37" }}>
            Let's Build Your Website 🚀
          </h2>

          <p>
            Hi! I'm Shreeyansh. How can I help your business?
          </p>

          <button>Start Conversation</button>
        </div>
      )}
    </>
  );
}

export default Chatbot;