import { type ReactNode } from "react";
import CourseGoal from './CourseGoal.tsx'
import { type CourseGoalType } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps):ReactNode {
  
  if(goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Add some.
      </InfoBox>
    
    )
  }

  let warningBox: ReactNode;
  
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're adding too manyy goals. Don't over do it.
      </InfoBox>
    );

  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}