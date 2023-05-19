"use client";
import { useState, useCallback, useEffect } from "react";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { TaskItem } from "@/entities/tasks";

export type TaskProps = {
  items: TaskItem[];
};

export default function TaskList({ items }: TaskProps) {
  // TODO: Fetch real list
  return (
    <div className="border-x border-t rounded">
      {items.map((item) => (
        <ExpandableTaskItem item={item} key={item.id} />
      ))}
    </div>
  );
}

function ExpandableTaskItem({ item }: { item: TaskItem }) {
  const storage = createTaskLocalStorage(item.id);
  const [isChecked, setIsChecked] = useState(storage.get());
  const [isExpanded, setIsExpanded] = useState(false);

  // function which will not be re-created for each re-rendering
  const handleClick = useCallback(() => {
    setIsExpanded((expanded) => !expanded);
  }, []);

  const handleCheckboxChange = useCallback(() => {
    setIsChecked((checked) => !checked);
  }, []);

  useEffect(() => {
    storage.set(isChecked);
  }, [isChecked]);

  const icon = (
    <span className="block h-6 w-6">
      {isExpanded ? <ChevronDownIcon /> : <ChevronLeftIcon />}
    </span>
  );

  return (
    <div key={item.id}>
      <div className="flex bg-gray-50 border-b center">
        <input
          checked={isChecked}
          className="mr-2 mt-3 ml-2 h-6 w-6 inline-block"
          id={item.id}
          onChange={handleCheckboxChange}
          type="checkbox"
        />

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

const TASK_KEY_PREFIX = "TASK_CHECKED";

function createTaskLocalStorage(itemId: TaskItem["id"]) {
  const taskCheckId = `${TASK_KEY_PREFIX}:${itemId}`;

  const get = (): boolean =>
    JSON.parse(localStorage.getItem(taskCheckId) ?? "false");

  const set = (value: boolean) =>
    localStorage.setItem(taskCheckId, JSON.stringify(value));

  return { get, set };
}
