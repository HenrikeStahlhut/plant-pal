import Headline from "@/components/Headline/Headline";
import Subheadline from "@/components/Subheadline/Subheadline";
import TodoContainer from "@/components/TodoContainer/TodoContainer";

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1), // 6 + 1 -> 7 -> "7" -> "07"
    date.getFullYear(),
  ].join("."); // "01.07.2023"
}

const todaysDate: string = formatDate(new Date());

export default function TodoToday() {
  return (
    <>
      <Headline>Todays Todo</Headline>
      <Subheadline>{todaysDate}</Subheadline>
      <TodoContainer today={true} />
    </>
  );
}
