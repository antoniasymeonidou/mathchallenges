
import Challenge from "./ChallengeBase";

const tasks = ["What is the derivative of x^2?", "Integrate x dx from 0 to 1."];

export default function AdultsChallenge() {
  return <Challenge category="adults" tasks={tasks} />;
}
