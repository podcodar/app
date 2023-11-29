import { user } from "@/dao/user.dao";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { username, email, page, pageSize } = req.query;

      const filter = {
        username: username as string | undefined,
        email: email as string | undefined,
      };

      const users = await user.fetchUsers(filter, parseInt(page as string) || 1, parseInt(pageSize as string) || 10);
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { loginUser } = req.body;

      if (!loginUser) {
        return res.status(400).json({ error: 'Missing loginUser data' });
      }

      const createdUser = await user.createUser(loginUser);

      res.status(201).json(createdUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
