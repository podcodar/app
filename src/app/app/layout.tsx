import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import { authOptions, getOriginPath } from "@/shared/auth";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/contexts/AuthProvider";
import { fetchUserWithSession } from "@/shared/auth";
import { UserProvider } from "@/contexts/UserProvider";
import { user } from "@/dao/user.dao";
import { redirect } from "next/navigation";
import { logger } from "@/shared/logger";

export const metadata: Metadata = {
  title: "PodCodar",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  const pathname = getOriginPath();
  const isOnboardingPage = pathname.endsWith("onboarding");

  const loggedUser = await fetchUserWithSession(session);
  const { username } = loggedUser;
  const isUserOnboardingFinished = await user.isOboardingFinished(username);
  const shouldRedirectToOnboardingPage =
    !isUserOnboardingFinished && !isOnboardingPage;
  const shouldRedirectToAppPage =
    !isUserOnboardingFinished && !isOnboardingPage;

  logger.log({
    context: "AppLayout",
    username,
    shouldRedirectToAppPage,
    shouldRedirectToOnboardingPage,
  });

  if (shouldRedirectToOnboardingPage) redirect("/app/onboarding");
  if (shouldRedirectToAppPage) redirect("/app");

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
