import React from "react";
import { quoteList } from "../Components/quoteslist";

function Authors() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "20px",
    backgroundColor: "#1b1b2f",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(0,0,0,0.7)",
    fontFamily: "'Poppins', sans-serif",
  };

  const authorCard = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px",
    margin: "20px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #0f0f1a, #2c5364)",
    color: "black",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
    transition: "0.3s",
  };

  const imgStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
    border: "3px solid #ff6f61",
    objectFit: "cover",
  };

  const authorNameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ffb347",
    marginBottom: "10px",
  };

  const quoteStyle = {
    fontStyle: "italic",
    fontSize: "1.1rem",
    marginBottom: "10px",
    color: "#fff2cc",
  };

  const pointsStyle = {
    textAlign: "left",
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "1rem",
    color: "#c0c0c0",
    lineHeight: "1.6",
  };

  // Add author facts here
  const authorFacts = {
    "Paulo Coelho": [
      "Brazilian lyricist and novelist.",
      "Famous for 'The Alchemist', a global bestseller.",
      "His works are translated into 80+ languages."
    ],
    "Oscar Wilde": [
      "Irish poet and playwright.",
      "Known for his sharp wit and flamboyant style.",
      "Author of 'The Picture of Dorian Gray'."
    ],
    "Dalai Lama": [
      "Spiritual leader of Tibetan Buddhism.",
      "Won the Nobel Peace Prize in 1989.",
      "Promotes compassion and mindfulness worldwide."
    ],
    "Winston Churchill": [
      "British Prime Minister during WWII.",
      "Famous orator and writer, Nobel Prize in Literature in 1953.",
      "Known for his courage, leadership, and resilience."
    ],
    "Albert Einstein": [
      "German-born theoretical physicist.",
      "Developed the theory of relativity.",
      "Received the Nobel Prize in Physics in 1921."
    ],
    "William Butler Yeats": [
      "Irish poet and one of the foremost figures of 20th-century literature.",
      "Co-founder of the Abbey Theatre in Dublin.",
      "Won the Nobel Prize in Literature in 1923."
    ],
    "Theodore Roosevelt": [
      "26th President of the United States.",
      "Known for his progressive reforms and 'Rough Riders'.",
      "Advocate for conservation and national parks."
    ],
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2.8rem", marginBottom: "30px", color: "#ff6f61" }}>
        ✍️ Game Authors & Famous Quotes
      </h1>

      {quoteList.map((q, i) => (
        <div key={i} style={authorCard}>
          {q.img && <img src={q.img} alt={q.author} style={imgStyle} />}
          <h3 style={authorNameStyle}>{q.author}</h3>
          <p style={quoteStyle}>"{q.text}"</p>

          {authorFacts[q.author] && (
            <ul style={pointsStyle}>
              {authorFacts[q.author].map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Authors;