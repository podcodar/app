import { prisma } from "@/shared/db";
import { seed, teardown } from "./db.utils";

beforeAll(seed);

afterAll(teardown);

describe("user test cases", () => {
  it("should be able to fetch user by username", async () => {
    const username = "amy";
    const user = await prisma.user.findFirst({
      where: { username },
    });
    expect(user).not.toBeNull();
    expect(user?.username).toBe(username);
  });

  it("should be able to fetch user`s tasks", async () => {
    const user = await prisma.user.findFirst({
      where: { id: 2 },
    });

    expect(user).not.toBeNull();

    const userTasks = await prisma.userTasks.findMany({
      where: { userId: user!.id },
    });

    expect(userTasks).toHaveLength(2);
  });

  it("should be able to fetch users working in a giving task", async () => {
    const task = await prisma.task.findFirst({ where: { id: 1 } });
    const anotherTask = await prisma.task.findFirst({ where: { id: 2 } });

    for (const t of [task, anotherTask]) {
      expect(t).not.toBeNull();

      const userTasks = await prisma.userTasks.findMany({
        where: { taskId: t!.id },
      });

      expect(userTasks.length).toBeGreaterThan(0);
    }
  });

  it("should be able to fetch dependent tasks from a giving task", async () => {
    const task = await prisma.task.findFirst({ where: { id: 2 } });

    expect(task).not.toBeNull();

    let dependentTasks = await prisma.tasksDependencies.findMany({
      where: { task: task! },
    });

    expect(dependentTasks).toHaveLength(0);

    const anotherTask = await prisma.task.findFirst({ where: { id: 1 } });

    expect(anotherTask).not.toBeNull();

    dependentTasks = await prisma.tasksDependencies.findMany({
      where: { task: anotherTask! },
    });

    expect(dependentTasks).toHaveLength(1);
  });

  it("should not be able to add a user with a duplicated username", async () => {
    const user = await prisma.user.findUnique({
      where: { username: "amy" },
    });
    expect(user).toBeTruthy();

    const username = user?.username ?? "";
    expect(username).not.toBe("");

    const createFailingUser = prisma.user.create({
      data: {
        username,
        name: "user-amy-3",
        email: "test-amy-3@gmail.com",
      },
    });

    await createFailingUser.catch((e: Error) => {
      expect(e.message).toContain("username");
    });
  });

  it("should not be able to add a user with a duplicated email", async () => {
    const user = await prisma.user.create({
      data: {
        username: "amy-3",
        name: "user-amy-3",
        email: "test-amy-3@gmail.com",
      },
    });
    expect(user).toBeTruthy();

    const email = user?.email ?? "";
    expect(email).not.toBe("");

    const createFailingUser = prisma.user.create({
      data: {
        email,
        name: "user-amy-4",
        username: "amy-4",
      },
    });

    await createFailingUser.catch((e: Error) => {
      expect(e.message).toContain("email");
    });
  });
});
