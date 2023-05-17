import TaskList from "@/components/TaskList";
import { items } from "@/shared/settings";
import { classes, container } from "@/shared/tw";

export default function Dashboard() {
  return (
    <div className="min-h-full">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <TaskList items={items} />
        </div>
      </div>
    </div>
  );
}
