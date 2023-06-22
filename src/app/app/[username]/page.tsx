import Profile from "@/components/Profile";
import { fetchUserBy } from "@/shared/db";

type Props = {
  params: {
    username: string;
  };
};

export default async function ProfilePage({ params: { username } }: Props) {
  const profileUser = await fetchUserBy({ username });

  return (
    <div className="min-h-full">
      <div className="bg-white shadow">
        <div className="flex items-center gap-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {profileUser ? (
            <Profile profileUser={profileUser} />
          ) : (
            <p className="text-2xl font-bold">
              Oops, este usuário não foi encontrado ):
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
