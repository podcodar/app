import TaskList from "@/components/TaskList";
import { authOptions, fetchUserWithSession } from "@/shared/auth";
import { task } from "@/dao/tasks.dao";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const loggedUser = await fetchUserWithSession(session);
  const userTasks = await task.fetchUserTasksBy({ userId: loggedUser.id });

  return (
    <div className="min-h-full">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 -6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
        <div className="mx-auto max-w-7xl py-6 sm:-6 lg:px-8">
          <TaskList tasks={userTasks} />
        </div>
      </div>
    </div>
  );
}
