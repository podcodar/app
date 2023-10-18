import { user } from "@/dao/user.dao";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await user;

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error. Please try again" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
