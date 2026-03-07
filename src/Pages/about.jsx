import React from "react";

function About() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #0f0f1a, #1b1b2f)",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(0,0,0,0.7)",
    fontFamily: "'Poppins', sans-serif",
  };

  const titleStyle = {
    fontSize: "3rem",
    marginBottom: "25px",
    color: "#ff6f61",
    textShadow: "2px 2px 10px #000",
  };

  const sectionStyle = {
    marginBottom: "25px",
    lineHeight: "1.8",
    fontSize: "1.2rem",
    color: "#fff2cc",
  };

  const highlight = { color: "#ffb347", fontWeight: "bold" };

  const creditStyle = {
    marginTop: "50px",
    fontSize: "1rem",
    color: "#ff6f61",
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>😊 About HappyHive</h1>

      <p style={sectionStyle}>
        <span style={highlight}>HappyHive</span> is a fun, interactive, and motivational word game designed
        to boost your mood, improve your focus, and fill your day with positivity! 🌟
      </p>

      <p style={sectionStyle}>
        Unscramble inspiring words, discover hidden letters, and earn motivational quotes from 
        world-famous authors like <span style={highlight}>Winston Churchill, Dalai Lama, Theodore Roosevelt</span> and more! 💡✨
      </p>

      <p style={sectionStyle}>
        <span style={highlight}>How to Play:</span> 
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "10px auto" }}>
          <li>1️⃣ A scrambled word will appear on the screen.</li>
          <li>2️⃣ Type the correct word in the input box.</li>
          <li>3️⃣ Submit your answer before the timer runs out! ⏱</li>
          <li>4️⃣ If correct, a motivational quote will appear with the author’s picture 🎉</li>
          <li>5️⃣ Click “Next Word” to continue the fun!</li>
        </ul>
      </p>

      <p style={sectionStyle}>
        <span style={highlight}>Features of HappyHive:</span>
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "10px auto" }}>
          <li>✨ Full-screen dark theme for immersive gameplay.</li>
          <li>⏱ Countdown timer for each word to challenge your speed and focus.</li>
          <li>🎉 Confetti celebration for every correct answer.</li>
          <li>💡 Motivational quotes with large author images for inspiration.</li>
          <li>🌟 Randomized word scramble for endless replay value.</li>
        </ul>
      </p>

      <p style={sectionStyle}>
        HappyHive isn’t just a game, it’s a journey to <span style={highlight}>positivity, inspiration, and self-growth.</span> 
        Play every day, learn new motivational words, and let happiness bloom! 💖
      </p>

      <p style={{ marginTop: "40px", fontSize: "1.3rem", color: "#ffb347", fontWeight: "bold" }}>
        Join the hive 🐝 and spread positivity, one word at a time!
      </p>

      <p style={creditStyle}>
        Created with ❤️ by <span style={highlight}>Supriya Yadav</span>
      </p>
    </div>
  );
}

export default About;