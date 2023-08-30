import { prisma } from "../src/shared/db";

async function main() {
  const tasksData = [
    {
      title: "Seed Task 1",
      description: "Description for Seed Task 1",
    },
    {
      title: "Seed Task 2",
      description: "Description for Seed Task 2",
    },
    {
      title: "Seed Task 3",
      description: "Description for Seed Task 3",
    },
  ];

  await prisma.task.createMany({
    data: tasksData,
  });

  const tasks = await prisma.task.findMany();

  const task1 = tasks[0];
  const task2 = tasks[1];
  const task3 = tasks[2];

  await prisma.tasksDependencies.create({
    data: {
      taskId: task1.id,
      dependentTaskId: task2.id,
    },
  });

  await prisma.tasksDependencies.create({
    data: {
      taskId: task2.id,
      dependentTaskId: task3.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
