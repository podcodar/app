import { user } from "@/dao/user.dao";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const { username, email, page, pageSize } = req.query;

      const filter = {
        username: typeof username === 'string' ? username : undefined,
        email: typeof email === 'string' ? email : undefined,
      };

      const pageNum = parseInt(page as string, 10);
      const size = parseInt(pageSize as string, 10);

      const users = await user.fetchUsers(filter, isNaN(pageNum) ? 1 : pageNum, isNaN(size) ? 10 : size);
      res.status(200).json(users);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
