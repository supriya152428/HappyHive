import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./Pages/welcome";
import Game from "./Pages/home";
import About from "./Pages/about";
import Authors from "./Pages/author";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/game" element={<Game />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
  );
}

export default App;