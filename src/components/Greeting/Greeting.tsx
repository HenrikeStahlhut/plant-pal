import Headline from "../Headline/Headline";

export default function Greeting() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return <Headline>Good {timeOfDay}!</Headline>;
}
