import { authOptions } from "@/shared/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type Props = {
  params: {
    username: string;
  };
};

export default async function Profile({ params: { username } }: Props) {
  const session = await getServerSession(authOptions);
  const sessionUsername = session!.user!.email!.split("@")[0];

  if (sessionUsername !== username) {
    return redirect(`/app/${sessionUsername}`);
  }

  return (
    <div className="min-h-full">
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            This is the &quot;/[username]&quot; route page for {username}
          </h1>
        </div>
      </div>
    </div>
  );
}
