import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleNext = async () => {
    if (currentAnswer.trim() === "") {
      alert("Please enter your answer.");
      return;
    }

    const updatedAnswers = [...answers, currentAnswer.trim()];

    setAnswers(updatedAnswers);
    setCurrentAnswer("");

    if (step < questions.length) {
      setStep(step + 1);
      return;
    }

    // Prepare lead information
    const lead = {
      businessType: updatedAnswers[0],
      websiteNeed: updatedAnswers[1],
      existingWebsite: updatedAnswers[2],
      budget: updatedAnswers[3],
      name: updatedAnswers[4],
      contact: updatedAnswers[5],
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setStep(questions.length + 1);
      } else {
        alert("Something went wrong while saving your details.");
      }
    } catch (error) {
      console.error("Lead submission error:", error);

      alert(
        "Could not connect to the lead server. Make sure server.js is running."
      );
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Start Screen */}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
                style={{
                  padding: "10px 18px",
                  background: "#D4AF37",
                  color: "#000",
                  border: "none",
                  borderRadius: "8px",
                  cursor: isSubmitting ? "wait" : "pointer",
                  fontWeight: "600",
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              >
                {isSubmitting ? "Saving..." : "Next →"}
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

          {/* Success Screen */}
          {step > questions.length && submitted && (
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
                Your project details have been received successfully.
              </p>

              <p
                style={{
                  color: "#D4AF37",
                  fontWeight: "600",
                }}
              >
                I'll get back to you soon. 🚀
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Chatbot;