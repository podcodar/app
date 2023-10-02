import { prisma } from "@/dao/client";
import { raise } from "@/shared/exceptions";
import { CheckType } from "@prisma/client";

export const seed = async () => {
  // create product categories
  await prisma.user.createMany({
    data: [
      { email: "amy@example.com", name: "Amy", username: "amy" },
      { email: "josh@example.com", name: "Josh", username: "josh" },
      { email: "danny@example.com", name: "Danny", username: "danny" },
    ],
  });

  const [
    amy,
    josh,
    danny
  ] = await Promise.all([
    prisma.user.findUnique({ where: { username: "amy" } }),
    prisma.user.findUnique({ where: { username: "josh" } }),
    prisma.user.findUnique({ where: { username: "danny" } }),
  ]);

  if (!amy || !josh || !danny) return raise("Users not created");

  console.log("✨ 3 users successfully created!");

  // create tasks
  await prisma.task.createMany({
    data: [
      {
        title: "Task 1",
        description: "First task",
        checkType: CheckType.MANUAL,
      },
      {
        title: "Task 2",
        description: "Second task",
        checkType: CheckType.MANUAL,
      },
      {
        title: "Task 3",
        description: "Third task",
        checkType: CheckType.MANUAL,
      },
    ],
  });

  const whereList = [{ title: "Task 1" }, { title: "Task 2" }];
  const [t1, t2] = await Promise.all(
    whereList.map((where) => prisma.task.findUnique({ where }))
  );

  if (!t1 || !t2) return raise("Tasks not created");

  console.log("✨ 3 tasks successfully created!");

  // create user tasks
  await prisma.userTasks.createMany({
    data: [
      { completed: false, taskId: t1.id, userId: amy.id },
      { completed: true, taskId: t1.id, userId: josh.id },
      { completed: true, taskId: t1.id, userId: danny.id },
      { completed: false, taskId: t2.id, userId: josh.id },
    ],
  });

  console.log("✨ 3 user task successfully created!");

  // create tasks dependencies
  await prisma.tasksDependencies.create({
    data: {
      taskId: t1.id,
      dependentTaskId: t2.id,
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
