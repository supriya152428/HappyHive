import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import Confetti from "react-confetti";
import { quoteList } from "./quoteslist";

// Sounds
const clickSoundUrl = "https://www.soundjay.com/buttons/sounds/button-16.mp3";
const successSoundUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";
const tickSoundUrl = "https://www.soundjay.com/clock/sounds/clock-ticking-1.mp3";
const timeUpSoundUrl = "https://www.soundjay.com/misc/sounds/alarm-clock-01.mp3";

const wordHints = [
  { word: "happiness", hint: "A feeling of joy and contentment" },
  { word: "smile", hint: "A facial expression showing happiness" },
  { word: "joy", hint: "A feeling of great pleasure" },
  { word: "positivity", hint: "Focus on the good things" },
  { word: "gratitude", hint: "Being thankful for what you have" },
  { word: "success", hint: "Achieving a desired goal" },
  { word: "friendship", hint: "A bond between people who care for each other" },
  { word: "courage", hint: "The ability to face fear or difficulty" },
  { word: "dream", hint: "A goal or aspiration you want to achieve" },
  { word: "love", hint: "Deep affection or care for someone or something" },
];

function PuzzleCard({ timePerWord = 35 }) {
  const navigate = useNavigate(); // for routing
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lettersSelected, setLettersSelected] = useState([]);
  const [solved, setSolved] = useState(false);
  const [quoteData, setQuoteData] = useState(null);
  const [timeLeft, setTimeLeft] = useState(timePerWord);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [scrambledLetters, setScrambledLetters] = useState([]);

  const clickSound = useRef(new Audio(clickSoundUrl));
  const successSound = useRef(new Audio(successSoundUrl));
  const tickSound = useRef(new Audio(tickSoundUrl));
  const timeUpSound = useRef(new Audio(timeUpSoundUrl));

  const currentWordObj = wordHints[currentIndex];
  const { word, hint } = currentWordObj;

  useEffect(() => {
    const letters = word.split("");
    setScrambledLetters(letters.sort(() => Math.random() - 0.5));
    resetCard(false);
  }, [word]);

  useEffect(() => {
    if (!hasInteracted || solved) return;
    if (timeLeft <= 0) {
      timeUpSound.current.play().catch(() => {});
      alert(`⏰ Time's up! The word was "${word}"`);
      nextWord();
      resetCard();
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    tickSound.current.currentTime = 0;
    tickSound.current.play().catch(() => {});
    return () => clearTimeout(timer);
  }, [timeLeft, solved, hasInteracted]);

  const resetCard = (resetTimer = true) => {
    setLettersSelected([]);
    setSolved(false);
    setQuoteData(null);
    setHasInteracted(false);
    if (resetTimer) setTimeLeft(timePerWord);
  };

  const nextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % wordHints.length);
    resetCard();
  };

  const goHome = () => {
    navigate("/"); // Redirect to home page
  };

  const handleLetterClick = (letter, index) => {
    if (!hasInteracted) setHasInteracted(true);
    if (solved) return;
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch(() => {});

    const newSelection = [...lettersSelected, { letter, index }];
    setLettersSelected(newSelection);

    const formedWord = newSelection.map((l) => l.letter).join("");
    if (formedWord === word) {
      setSolved(true);
      successSound.current.play().catch(() => {});
      const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
      setQuoteData(randomQuote);
    }
  };

  const handleClear = () => {
    setLettersSelected([]);
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch(() => {});
  };

  const isLetterUsed = (index) => lettersSelected.some((l) => l.index === index);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      margin: "0",
      padding: "25px",
      background: "linear-gradient(145deg, #0f0f1a, #1b1b2f)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      fontFamily: "'Poppins', sans-serif",
      position: "relative"
    }}>
      {solved && <Confetti recycle={false} numberOfPieces={400} />}

      {/* Top-left Home button */}
      <div style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 1000,
      }}>
        <button onClick={goHome} style={{
          padding: "8px 12px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#17a2b8",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}>🏠 Home</button>
      </div>

      {/* Timer */}
      <div style={{ width: "100%", maxWidth: "500px", marginBottom: "15px", textAlign: "center" }}>
        <div style={{
          width: `${(timeLeft / timePerWord) * 100}%`,
          height: "10px",
          backgroundColor: "#ff6f61",
          borderRadius: "8px",
          transition: "width 1s linear",
          marginBottom: "6px",
        }}></div>
        <p style={{ fontSize: "1.2rem" }}>Time Left ⏱: {timeLeft}s</p>
      </div>

      {!solved && (
        <>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "6px", color: "#ffb347" }}>🧩 Select the Word! 🎉</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "12px", color: "#ffb347" }}>💡 Hint: {hint}</p>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: "15px" }}>
            {scrambledLetters.map((l, i) => (
              <span key={i} style={{
                margin: "3px",
                padding: "10px",
                fontSize: "1.5rem",
                border: "2px solid #ff6f61",
                borderRadius: "8px",
                backgroundColor: isLetterUsed(i) ? "#555" : "#2c2c3f",
                fontWeight: "bold",
                color: "#ffb347",
                cursor: isLetterUsed(i) ? "default" : "pointer",
                userSelect: "none",
                opacity: isLetterUsed(i) ? 0.5 : 1,
                transition: "0.2s",
              }}
                onClick={() => !isLetterUsed(i) && handleLetterClick(l, i)}
              >
                {l}
              </span>
            ))}
          </div>

          <div style={{ fontSize: "1.5rem", marginTop: "12px", minHeight: "35px", color: "#ffb347" }}>
            {lettersSelected.map((l) => l.letter).join("")}
          </div>

          <div style={{ marginTop: "12px" }}>
            <button onClick={handleClear} style={{
              padding: "8px 16px",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#ff6f61",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}>Clear 🔄</button>
          </div>
        </>
      )}

      {solved && quoteData && (
        <div style={{ textAlign: "center", color: "#ffb347", marginTop: "15px" }}>
          <p style={{ fontSize: "1.6rem", marginBottom: "10px" }}>🎉 You Did It! 🎉</p>
          <img src={quoteData.img} alt={quoteData.author} style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            marginBottom: "12px",
            border: "5px solid #ff6f61",
            objectFit: "cover",
          }} />
          <p style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "6px" }}>“{quoteData.text}”</p>
          <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>— {quoteData.author}</p>

          <div style={{ marginTop: "6px" }}>
            <button onClick={nextWord} style={{
              padding: "6px 14px",
              fontSize: "0.95rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#ff8c42",
              fontWeight: "bold",
              cursor: "pointer",
              margin: "0 4px",
            }}>Next Word 🔄</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PuzzleCard;