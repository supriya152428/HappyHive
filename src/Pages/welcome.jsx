import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import bgImage from "../assets/Fondo PC aesthetic hoe.jpg";

// New quote list
const newQuoteList = [
  { text: "The only limit is your imagination.", author: "Anonymous" },
  { text: "Be fearless in the pursuit of what sets your soul on fire.", author: "Unknown" },
  { text: "Creativity takes courage.", author: "Henri Matisse" },
  { text: "Dream big. Work hard. Stay focused.", author: "Supriya Yadav" },
  { text: "Happiness is homemade.", author: "Unknown" },
];

function WelcomeScreen() {
  const navigate = useNavigate();
  const [showQuote, setShowQuote] = useState(null);
  const [confetti, setConfetti] = useState(false);

  const beeGif = "https://c.tenor.com/QYgQzfwsPO4AAAAC/honey-bees.gif";

  // Random quote
  useEffect(() => {
    const randomQuote = newQuoteList[Math.floor(Math.random() * newQuoteList.length)];
    setShowQuote(randomQuote);
  }, []);

  // Cursor sparkle trail removed

  // Container style with background image
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1b1b2f", 
    color: "#fff",
    gap: "30px",
    padding: "20px",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  };

  const titleStyle = {
    fontSize: "5rem",
    fontWeight: "900",
    color: "#ffcc00",
    textShadow: "4px 4px 20px #000",
    margin: "0",
    cursor: "pointer",
    transition: "all 0.4s ease",
    zIndex: 2,
  };

  const subtitleStyle = {
    fontSize: "2rem",
    color: "#ffb347",
    textShadow: "2px 2px 10px #000",
    zIndex: 2,
  };

  const buttonStyle = {
    width: "280px",
    padding: "20px 0",
    fontSize: "1.8rem",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
    backgroundColor: "#ff6f61",
    color: "#fff",
    zIndex: 2,
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2c2c3c",
    color: "#ffcc00",
    border: "3px solid #ffcc00",
  };

  const authorBoxStyle = {
    padding: "15px 30px",
    borderRadius: "20px",
    background: "#2c2c3c",
    color: "#ffcc00",
    fontWeight: "700",
    fontSize: "1.3rem",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
    zIndex: 2,
  };

  // More floating bees
  const floatingBees = Array.from({ length: 25 }).map((_, i) => (
    <img
      key={i}
      src={beeGif}
      alt="bee"
      style={{
        position: "absolute",
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${30 + Math.random() * 20}px`,
        height: "auto",
        opacity: 0.9,
        animation: `beeFloat ${5 + Math.random() * 5}s infinite ease-in-out`,
        pointerEvents: "none",
      }}
    />
  ));

  return (
    <div style={containerStyle}>
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      />

      {confetti && <Confetti recycle={false} numberOfPieces={400} />}
      {floatingBees}

      <h1
        style={titleStyle}
        onMouseEnter={(e) => {
          setConfetti(true);
          e.currentTarget.style.transform = "scale(1.1) rotate(-2deg)";
          e.currentTarget.style.textShadow = "0 0 30px #ffcc00, 0 0 60px #ff9966";
        }}
        onMouseLeave={(e) => {
          setConfetti(false);
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.textShadow = "4px 4px 20px #000";
        }}
      >
        🌟 HappyHive 🌟
      </h1>

      <h3 style={subtitleStyle}>A Fun Word Puzzle & Quote Game</h3>

      {showQuote && (
        <div
          style={{
            color: "#ffb347",
            fontSize: "1.3rem",
            fontWeight: "600",
            zIndex: 2,
          }}
        >
          💡 "{showQuote.text}" — {showQuote.author}
        </div>
      )}

      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => navigate("/game")}
      >
        Lessgoo 🎉🥳🚀
      </button>

      <button
        style={secondaryButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => navigate("/authors")}
      >
        Authors ✍️
      </button>

      <button
        style={secondaryButtonStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={() => navigate("/about")}
      >
        About Game ℹ️
      </button>

      <div style={authorBoxStyle}>
        Created with ❤️ by{" "}
        <span style={{ fontWeight: "bold" }}>Supriya Yadav</span>
      </div>

      <style>{`
        @keyframes beeFloat {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -10px) rotate(10deg); }
          50% { transform: translate(-20px, 10px) rotate(-10deg); }
          75% { transform: translate(15px, -5px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

export default WelcomeScreen;