import { user } from "@/dao/user.dao";
import { NextResponse } from "next/server";

// export default async function handler(
//   req: NextRequest,
//   res: NextResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       await user;

//       res.status(200).json(user);
//     } catch (error) {
//       console.error(error);
//       res
//         .status(500)
//         .json({ error: "Internal Server Error. Please try again" });
//     }podcodar
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }

export async function GET() {
  // fetch all user data from database
  const users = await user.fetchUsers();
  return NextResponse.json({ users });
}

// Modificações commit Ogata
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const users = await getAllUsers();
//       res.status(200).json(users);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error. Please try again" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
