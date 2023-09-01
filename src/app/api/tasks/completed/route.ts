import { task } from "@/shared/tasks.dao";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const checkUserTaskParams = z
  .object({
    userId: z.number(),
    taskId: z.number(),
    completed: z.boolean(),
  })
  .strict();

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { userId, taskId, completed } = checkUserTaskParams.parse(data);

  const userTask = await task.checkUserTask(taskId, userId, completed);

  return NextResponse.json(userTask);
}
