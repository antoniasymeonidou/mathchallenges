
import Challenge from "./ChallengeBase";

const tasks = ["Solve for x: 3x + 2 = 11", "What is the square root of 144?"];

export default function TeensChallenge() {
  return <Challenge category="teens" tasks={tasks} />;
}
