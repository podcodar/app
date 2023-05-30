import { prisma } from "@/shared/db";

export const seed = async () => {
  // create product categories
  await prisma.user.createMany({
    data: [
      { email: "amy@example.com", name: "Amy", username: "amy" },
      { email: "josh@example.com", name: "Josh", username: "josh" },
      { email: "danny@example.com", name: "Danny", username: "danny" },
    ],
  });

  console.log("✨ 3 users successfully created!");

  // create tasks
  await prisma.task.createMany({
    data: [
      {
        id: 1,
        title: "Task 1",
        description: "First task",
      },
      {
        id: 2,
        title: "Task 2",
        description: "Second task",
      },
      {
        id: 3,
        title: "Task 3",
        description: "Third task",
      },
    ],
  });

  console.log("✨ 3 tasks successfully created!");

  // create user tasks
  await prisma.userTasks.createMany({
    data: [
      { completed: false, taskId: 1, userId: 1 },
      { completed: true, taskId: 1, userId: 2 },
      { completed: false, taskId: 2, userId: 2 },
    ],
  });

  console.log("✨ 3 user task successfully created!");

  // create tasks dependencies
  await prisma.tasksDependencies.create({
    data: {
      taskId: 1,
      dependentTaskId: 2,
    },
  });

  console.log("✨ 1 task dependency successfully created!");
};

export const teardown = async () => {
  const deleteTasksDependencies = prisma.tasksDependencies.deleteMany();
  const deleteUserTasks = prisma.userTasks.deleteMany();
  const deleteTasks = prisma.task.deleteMany();
  const deleteUsers = prisma.user.deleteMany();

  await prisma.$transaction([
    deleteTasksDependencies,
    deleteUserTasks,
    deleteTasks,
    deleteUsers,
  ]);

  await prisma.$disconnect();
};
