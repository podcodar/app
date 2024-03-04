import { user } from "@/dao/user.dao";
import { NextResponse } from "next/server";
import { z } from "zod";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

const ListAllUsersParamsSchema = z.object({
  username: z.string().optional(),
  email: z.string().optional(),
  page: z.number().default(DEFAULT_PAGE),
  pageSize: z.number().default(DEFAULT_PAGE_SIZE),
});

export async function GET(req) {
  const queryParams = ListAllUsersParamsSchema.parse(Object.fromEntries(req.nextUrl.searchParams));

  const { username, email, page, pageSize } = queryParams;

  const users = await user.fetchUsers({ username, email }, page, pageSize);

  return NextResponse.json(users);
}
