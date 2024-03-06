import { user } from "@/dao/user.dao";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

const ListAllUsersParamsSchema = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  page: z.coerce.number().default(DEFAULT_PAGE),
  pageSize: z.coerce.number().default(DEFAULT_PAGE_SIZE),
});

export async function GET(req: NextRequest) {
  const queryParams = ListAllUsersParamsSchema.parse(
    Object.fromEntries(req.nextUrl.searchParams)
  );

  const { username, email, page, pageSize } = queryParams;

  const users = await user.fetchUsers({ username, email }, page, pageSize);

  return NextResponse.json(users);
}
