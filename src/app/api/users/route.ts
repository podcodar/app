import { user } from "@/dao/user.dao";
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextRequest) {
  try {
    const { username, email, page, pageSize } = req.query;

    const filter = {
      username: typeof username === 'string' ? username : undefined,
      email: typeof email === 'string' ? email : undefined,
    };

    const pageNum = parseInt(page as string, 10);
    const size = parseInt(pageSize as string, 10);

    const users = await user.fetchUsers(filter, isNaN(pageNum) ? 1 : pageNum, isNaN(size) ? 10 : size);
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
