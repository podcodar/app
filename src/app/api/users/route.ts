import { user } from "@/dao/user.dao";
import { PaginationParamsSchema } from "@/shared/pagination";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

const ListAllUsersParamsSchema = z
  .object({
    name: z.string().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
  })
  .merge(PaginationParamsSchema);

export async function GET(req: NextRequest) {
  const queryParams = ListAllUsersParamsSchema.parse(
    Object.fromEntries(req.nextUrl.searchParams)
  );

  const { page, pageSize, ...filters } = queryParams;

  const users = await user.fetchUsers(filters, page, pageSize);

  return NextResponse.json(users);
}
