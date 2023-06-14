import Profile from "@/components/Profile";
import { prisma } from "@/shared/db";
import { redirect } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
};

export default async function ProfilePage({ params: { username } }: Props) {
  const profileUser = await prisma.user.findUnique({
    where: { username: decodeURIComponent(username) },
  });

  if (!profileUser) {
    redirect("/");
  }

  return (
    <div className="min-h-full">
      <div className="bg-white shadow">
        <div className="flex items-center gap-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Profile profileUser={profileUser} />
        </div>
      </div>
    </div>
  );
}
