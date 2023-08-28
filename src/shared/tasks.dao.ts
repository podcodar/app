import { prisma } from "./db";

class TaskDAO {
  async listNoDependenciesTasks() {
    return await prisma.task.findMany({
      where: { dependsOn: { none: {} } },
    });
  }
}

export const task = new TaskDAO();
