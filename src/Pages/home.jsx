import React, { useState } from "react";
import PuzzleCard from "../Components/puzzlecard";
import { quoteList } from "../Components/quoteslist";

const wordsList = [
  "happiness", "smile", "joy", "positivity", "gratitude", "success",
  "inspiration", "motivation", "friendship", "adventure", "courage",
  "kindness", "dream", "hope", "confidence", "love", "achievement",
  "freedom", "optimism", "determination"
];

function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextWord = () => setCurrentWordIndex((prev) => (prev + 1) % wordsList.length);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f0f1a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}>
      <PuzzleCard
        word={wordsList[currentWordIndex]}
        nextWord={nextWord}
        allQuotes={quoteList}
        timePerWord={30} // 30 seconds per word
      />
    </div>
  );
}

export default Game;