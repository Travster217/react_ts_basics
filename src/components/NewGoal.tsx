import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    
    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="goal">Your Goal</label>
      <input type="text" name="goal" id="goal" ref={goal} />
    </p>
    <p>
      <label htmlFor="summary">Short summary</label>
      <input type="text" name="summary" id="summary" ref={summary} />
    </p>
    <p>
      <button>Add Goal</button>
    </p>
  </form>

}