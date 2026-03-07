import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "15px",
    backgroundColor: "#1b1b2f",
    gap: "20px",
    borderBottom: "2px solid #ff6f61",
  };

  const linkStyle = {
    padding: "10px 20px",
    borderRadius: "10px",
    backgroundColor: "#ff6f61",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "0.3s",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
    </nav>
  );
}

export default Navbar;