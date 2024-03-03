import { user } from "@/dao/user.dao";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

const checkGetAllUsersParams = z.object({
  username: z.string().optional(),
  email: z.string().optional(),
  page: z.number().optional().transform((val) => (val ? Number(val) : undefined)),
  pageSize: z.number().optional().transform((val) => (val ? Number(val) : undefined)),
});

export async function GET(req: NextRequest) {
  try {
   
    const queryParams = checkGetAllUsersParams.parse(Object.fromEntries(req.nextUrl.searchParams));

    const { username, email, page, pageSize } = queryParams;
    
    const users = await user.fetchUsers({ username, email }, page, pageSize);

    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
