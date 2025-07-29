import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import KidsChallenge from "./components/KidsChallenge";
import TeensChallenge from "./components/TeensChallenge";
import AdultsChallenge from "./components/AdultsChallenge";
import EldersChallenge from "./components/EldersChallenge";
import "./App.css";

const categories = ["kids", "teens", "adults", "elders"];

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="app-title">MathMind</Link>
          <div className="nav-links">
            {categories.map((cat) => (
              <Link key={cat} to={`/${cat}`} className="nav-link">
                {cat}
              </Link>
            ))}
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kids" element={<KidsChallenge />} />
            <Route path="/teens" element={<TeensChallenge />} />
            <Route path="/adults" element={<AdultsChallenge />} />
            <Route path="/elders" element={<EldersChallenge />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home centered-box">
      <h2>Welcome to MathMind</h2>
      <p className="home-intro">A fun and fast-paced math challenge game for all ages! Pick your group and try to solve as many problems as you can in 5 minutes.</p>
      <div className="home-buttons">
        {categories.map((cat) => (
          <Link key={cat} to={`/${cat}`} className="home-category-btn">
            {cat.charAt(0).toUpperCase() + cat.slice(1)} Challenge
          </Link>
        ))}
      </div>
      <p className="home-footer">Sharpen your skills. Beat your high score. Have fun!</p>
    </div>
  );
}

export default App;