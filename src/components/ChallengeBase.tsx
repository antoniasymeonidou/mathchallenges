import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  category: string;
  tasks: string[];
}

export default function Challenge({ category, tasks }: Props) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => Number(localStorage.getItem(`${category}-highscore`) || 0));
  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (score > highScore) {
            localStorage.setItem(`${category}-highscore`, String(score));
            setHighScore(score);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextTask = () => {
    if (index < tasks.length - 1) {
      setIndex(index + 1);
      setScore(score + 1);
    } else {
      alert("Challenge complete!");
      if (score > highScore) {
        localStorage.setItem(`${category}-highscore`, String(score));
        setHighScore(score);
      }
      navigate("/");
    }
  };

  const isDisabled = timeLeft === 0;

  return (
    <div className="challenge-box">
      <h2>{category} Challenge</h2>
      <p className="timer">Time Left: {timeLeft}s</p>
      <p className="question">{tasks[index]}</p>

      <div className="buttons">
        <button className="submit-btn" onClick={nextTask} disabled={isDisabled}>
          Submit / Next
        </button>
        <button className="skip-btn" onClick={() => setIndex(index + 1)} disabled={isDisabled}>
          Skip
        </button>
        <button className="home-btn" onClick={() => navigate("/")}>
          Home
        </button>
      </div>

      <div className="score">Score: {score} | Highscore: {highScore}</div>

      {isDisabled && (
        <p className="timeout-message">⏱ Time’s up! Final Score: {score}</p>
      )}
    </div>
  );
}
