import React from "react";
import {quoteList} from "./quoteslist";

function QuoteCard({ quote, author, img }) {
  const cardStyle = {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    color: "#6b4226",
    fontWeight: "500",
    fontSize: "1.1rem",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    position: "relative",
  };

  const quoteEmojiStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
  };

  const authorStyle = {
    fontWeight: "bold",
    marginTop: "12px",
    fontSize: "1rem",
    color: "#ff6f61",
  };

  const imgStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "12px",
    border: "3px solid #ffb347",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      {img && <img src={img} alt={author} style={imgStyle} />}
      <div style={quoteEmojiStyle}>💡✨</div>
      <p>"{quote}"</p>
      <p style={authorStyle}>— {author}</p>
    </div>
  );
}

export default QuoteCard;