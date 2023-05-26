import Profile from "@/components/Profile";
import { authOptions } from "@/shared/auth";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    username: string;
  };
};

// FIXME: This error disabling should be removed as we use the username param in the future
// eslint-disable-next-line no-unused-vars
export default async function ProfilePage({ params: { username } }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-full">
      <div className="bg-white shadow">
        <div className="flex items-center gap-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Profile session={session} username={username} />
        </div>
      </div>
    </div>
  );
}
