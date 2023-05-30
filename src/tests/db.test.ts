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
});
