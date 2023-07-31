import { useState } from "react";
import { TaskInfoCard } from "./TaskInfo.styled";
import { WrapperLink } from "../WrapperLink/WrapperLink.styled";

// TODO: Add Icons for completed and uncompleted tasks, add logic

export default function TaskInfo() {
  // @ts-ignore
  const [isCompleted, setIsCompleted] = useState(true);

  const completedText = isCompleted
    ? "All tasks completed"
    : "X uncompleted tasks";

  return (
    <WrapperLink href={isCompleted ? "" : "/todo/today"}>
      <TaskInfoCard completed={isCompleted}>{completedText}</TaskInfoCard>
    </WrapperLink>
  );
}
