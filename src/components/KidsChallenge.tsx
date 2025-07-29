
import Challenge from "./ChallengeBase";

const tasks = ["What is 2 + 2?", "Count the number of apples in the image."];

export default function KidsChallenge() {
  return <Challenge category="kids" tasks={tasks} />;
}
