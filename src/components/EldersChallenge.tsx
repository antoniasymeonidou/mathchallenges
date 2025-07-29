
import Challenge from "./ChallengeBase";

const tasks = ["Solve: 2x^2 - 4x + 2 = 0", "Find the value of pi to 3 decimals"];

export default function EldersChallenge() {
  return <Challenge category="elders" tasks={tasks} />;
}
