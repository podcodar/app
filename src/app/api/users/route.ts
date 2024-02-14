import { user } from "@/dao/user.dao";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  try {
    const { username, email, page, pageSize } = req.query || {};

    const filter = {
      username: typeof username === "string" ? username : undefined,
      email: typeof email === "string" ? email : undefined,
    };

    const pageNum = page ? parseInt(page as string, 10) : 1;
    const size = pageSize ? parseInt(pageSize as string, 10) : 10;

    const users = await user.fetchUsers(filter, pageNum, size);
    return new NextResponse(JSON.stringify(users), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
