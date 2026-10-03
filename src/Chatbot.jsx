import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const questions = [
    "What type of business do you have? 🏢",
    "Do you need a new website or want to improve an existing website? 🌐",
    "Do you already have a website? 💻",
    "What is your approximate budget for the website? 💰",
    "What is your name? 👋",
    "How can I contact you? 📞",
  ];

  const handleStart = () => {
    setStep(1);
  };

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

          {step === 0 && (
            <>
              <p>
                Hi! I'm Shreeyansh. How can I help your business?
              </p>

              <button
                onClick={handleStart}
                style={{
                  padding: "10px 18px",
                  background: "#D4AF37",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Start Conversation
              </button>
            </>
          )}

          {step > 0 && step <= questions.length && (
            <>
              <p>{questions[step - 1]}</p>

              <input
                type="text"
                placeholder="Type your answer..."
                style={{
                  width: "100%",
                  padding: "10px",
                  boxSizing: "border-box",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  marginBottom: "10px",
                }}
              />

              <button
                onClick={() => setStep(step + 1)}
                style={{
                  padding: "10px 18px",
                  background: "#D4AF37",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Next →
              </button>
            </>
          )}

          {step > questions.length && (
            <>
              <p>
                Thanks! 🎉 Your details have been received.
              </p>

              <p>
                I'll get back to you soon to discuss your website.
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Chatbot;