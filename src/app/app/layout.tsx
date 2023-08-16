import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions, getOriginPath } from "@/shared/auth";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/contexts/AuthProvider";
import { fetchUserWithSession } from "@/shared/auth";
import { UserProvider } from "@/contexts/UserProvider";
import { user } from "@/shared/db";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "PodCodar",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);

  const loggedUser = await fetchUserWithSession(session);

  const isUserOnboardingFinished = await user.isOboardingFinished(
    loggedUser.username
  );
  const pathname = getOriginPath();
  const isOnboardingPage = pathname.endsWith("onboarding");

  if (!isUserOnboardingFinished && !isOnboardingPage)
    redirect("/app/onboarding");
  if (isUserOnboardingFinished && isOnboardingPage) redirect("/app");

  return (
    <AuthProvider>
      <UserProvider user={loggedUser}>
        <div className="shadow-md">
          <Navbar />
        </div>
        {children}
      </UserProvider>
    </AuthProvider>
  );
}
