"use client";
import { useState, useCallback } from "react";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { TaskItem } from "@/entities/tasks";

export type TaskProps = {
  items: TaskItem[];
};

function TaskList({ items }: TaskProps) {
  // TODO: Fetch real list
  return (
    <div className="border-x border-t rounded">
      {items.map((item) => (
        <ExpandableTaskItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default TaskList;

function ExpandableTaskItem({ item }: { item: TaskItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // function which will not be re-created for each re-rendering
  const handleClick = useCallback(
    () => setIsExpanded((expanded) => !expanded),
    []
  );
  const handleCheckboxChange = useCallback(() => {
    setIsChecked((checked) => !checked);
  }, []);

  const icon = (
    <span className="block h-6 w-6">
      {isExpanded ? <ChevronDownIcon /> : <ChevronLeftIcon />}
    </span>
  );

  return (
    <div key={item.id}>
      <div className="flex bg-gray-50 border-b center">
        <div className="">
          {" "}
          <input
            checked={isChecked}
            className="mr-2 mt-3 ml-2 h-6 w-6 inline-block"
            id={item.id}
            onChange={handleCheckboxChange}
            type="checkbox"
          />
        </div>
        <div
          className="text-xl p-3 flex justify-between bg-gray-50 grow border-b cursor-pointer"
          onClick={handleClick}
        >
          {item.label}
          {icon}
        </div>
      </div>
      {isExpanded && <div className="border-b p-5">{item.content}</div>}
    </div>
  );
}

//expandableTaskItem -> Valor vai ser recebido como propriedade.

//L41. Conditional Rendering. If isExpanded is true it will show tem content, otherwise will be collapsed, not rendered.
//L37. Everytime the user clicks on the label the state is updated, setting the new state as the argument passed. Index, turns to nextIndex  at L20,21 for escope questions.
//Console is showind true and false
