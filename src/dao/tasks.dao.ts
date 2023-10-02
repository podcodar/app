import { Prisma } from "@prisma/client";
import { prisma } from "./client";

class TaskDAO {
  async listNoDependenciesTasks() {
    return await prisma.task.findMany({
      where: { dependsOn: { none: {} } },
    });
  }

  async fetchTaskById(id: number) {
    return await prisma.task.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async fetchUserTasksBy(where: Prisma.UserTasksWhereInput) {
    return await prisma.userTasks.findMany({
      where,
      include: {
        Task: true,
      },
    });
  }

  async checkUserTask(taskId: number, userId: number, completed: boolean) {
    return prisma.userTasks.update({
      where: {
        userId_taskId: { userId, taskId },
      },
      data: { completed },
    });
  }
}

export const task = new TaskDAO();
