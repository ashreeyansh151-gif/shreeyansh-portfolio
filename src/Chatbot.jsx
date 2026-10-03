import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

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

  const handleNext = () => {
    if (currentAnswer.trim() === "") {
      alert("Please enter your answer.");
      return;
    }

    setAnswers([...answers, currentAnswer]);

    setCurrentAnswer("");
    setStep(step + 1);
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
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
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
            maxWidth: "calc(100vw - 50px)",
            background: "#111",
            border: "1px solid #D4AF37",
            borderRadius: "15px",
            zIndex: 9999,
            color: "white",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <h2
            style={{
              color: "#D4AF37",
              marginTop: "0",
              marginBottom: "10px",
            }}
          >
            Let's Build Your Website 🚀
          </h2>

          {/* Starting Screen */}
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
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Start Conversation
              </button>
            </>
          )}

          {/* Questions */}
          {step > 0 && step <= questions.length && (
            <>
              <p
                style={{
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                {questions[step - 1]}
              </p>

              <input
                type="text"
                placeholder="Type your answer..."
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleNext();
                  }
                }}
                style={{
                  width: "100%",
                  padding: "11px",
                  boxSizing: "border-box",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  marginBottom: "10px",
                  outline: "none",
                  fontSize: "14px",
                }}
              />

              <button
                onClick={handleNext}
                style={{
                  padding: "10px 18px",
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Next →
              </button>

              <p
                style={{
                  fontSize: "12px",
                  color: "#aaa",
                  marginTop: "12px",
                }}
              >
                Question {step} of {questions.length}
              </p>
            </>
          )}

          {/* Completion Screen */}
          {step > questions.length && (
            <>
              <p
                style={{
                  lineHeight: "1.6",
                }}
              >
                Thanks! 🎉
              </p>

              <p
                style={{
                  lineHeight: "1.6",
                }}
              >
                I've collected your project details. I'll get back to you
                soon to discuss your website.
              </p>

              {/* Temporary display of collected answers */}
              <div
                style={{
                  marginTop: "15px",
                  padding: "12px",
                  background: "#1c1c1c",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              >
                <strong style={{ color: "#D4AF37" }}>
                  Your Details
                </strong>

                {answers.map((answer, index) => (
                  <p key={index} style={{ margin: "8px 0" }}>
                    <strong>{index + 1}.</strong> {answer}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Chatbot;