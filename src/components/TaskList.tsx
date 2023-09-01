"use client";

import { useCallback, useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Task, UserTasks } from "@prisma/client";
import { api } from "@/shared/api";

type UserTask = UserTasks & {
  Task: Task;
};

type Props = {
  tasks: UserTask[];
};

export default function TaskList({ tasks }: Props) {
  return (
    <div className="border-x border-t rounded">
      {tasks.map((task) => (
        <ExpandableTaskItem key={task.taskId} userTask={task} />
      ))}
    </div>
  );
}

function ExpandableTaskItem({ userTask }: { userTask: UserTask }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(userTask.completed);

  const handleClick = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const handleCheckboxChange = useCallback(() => {
    setIsChecked((prev) => {
      const completed = !prev;

      fetch(api.tasks.completed, {
        method: "PUT",
        body: JSON.stringify({
          userId: userTask.userId,
          taskId: userTask.taskId,
          completed,
        }),
      });

      return completed;
    });
  }, [userTask.userId, userTask.taskId]);

  const icon = (
    <span className="block h-6 w-6">
      {isExpanded ? <ChevronDownIcon /> : <ChevronLeftIcon />}
    </span>
  );

  return (
    <div key={userTask.Task.id}>
      <div className="flex bg-gray-50 border-b center">
        <input
          checked={isChecked}
          className="mr-2 mt-3 ml-2 h-6 w-6 inline-block"
          id={userTask.Task.id.toString()}
          onChange={handleCheckboxChange}
          type="checkbox"
        />

        <div
          className="text-xl p-3 flex justify-between bg-gray-50 grow border-b cursor-pointer"
          onClick={handleClick}
        >
          {userTask.Task.title}
          {icon}
        </div>
      </div>
      {isExpanded && (
        <div className="border-b p-5">{userTask.Task.description}</div>
      )}
    </div>
  );
}
