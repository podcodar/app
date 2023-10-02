import { Prisma } from "@prisma/client";
import { prisma } from "./client";
import { logger } from "@/shared/logger";

class TaskDAO {
  async listNoDependenciesTasks() {
    return await prisma.task.findMany({
      where: { dependsOn: { none: {} } },
    });
  }
  async unlockAvailableTasks(taskId: number, userId: number) {
    const followUpTasks = await prisma.task.findUniqueOrThrow({
      where: { id: taskId },
      include: {
        followUp: {
          include: {
            dependentTask: true,
          },
        },
      },
    });

    logger.log({
      context: "handleFollowUpTasks",
      followUpTasks,
    });

    await Promise.all(
      followUpTasks.followUp.map(async (followUpTask) => {
        const { dependentTask } = followUpTask;

        logger.log("Handle follow-up task", {
          context: "handleFollowUpTasks",
          followUpTask,
        });

        const dependencies = await prisma.tasksDependencies.findMany({
          where: { dependentTask },
        });

        const validDependencies = dependencies.filter(
          (t) => t.taskId != taskId
        );

        logger.log("List all task dependencies", {
          context: "handleFollowUpTasks",
          dependencies,
          validDependencies,
        });

        const allDependenciesDone = await Promise.all(
          validDependencies.map(async ({ taskId }) => {
            const userTask = await prisma.userTasks.findUnique({
              where: {
                userId_taskId: { taskId, userId },
              },
            });

            return userTask?.completed;
          })
        );

        logger.log({
          context: "handleFollowUpTasks",
          allDependenciesDone,
        });

        if (allDependenciesDone.every(Boolean)) {
          logger.log("Assing a new user task", {
            context: "handleFollowUpTasks",
            taskId: dependentTask.id,
          });

          await prisma.userTasks.upsert({
            where: {
              userId_taskId: {
                userId,
                taskId: dependentTask.id,
              },
            },
            update: {
              completed: false,
            },
            create: {
              userId,
              taskId: dependentTask.id,
              completed: false,
            },
          });
        }
      })
    );
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
