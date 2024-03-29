"use client";
import { PropsWithChildren } from "react";
import { OnboardingProvider, Step } from "@/contexts/OnboardingFormProvider";
import OnboardingRegistration from "@/components/forms/OnboardingRegistration";
import OnboardingContact from "@/components/forms/OnboardingContact";
import OnboardingProfessional from "@/components/forms/OnboardingProfessional";
import OnboardingAbout from "@/components/forms/OnboardingAbout";
import { useSearchParams } from "next/navigation";
import OnboardingReview from "@/components/forms/OnboardingReview";

const steps: Step[] = [
  { content: OnboardingRegistration },
  { content: OnboardingContact },
  { content: OnboardingProfessional },
  { content: OnboardingAbout },
  { content: OnboardingReview },
];

export default function OnboardingLayout({ children }: PropsWithChildren) {
  const searchParams = useSearchParams();
  const initialStep = searchParams.get("step") ?? "0";

  return (
    <OnboardingProvider initialStep={Number(initialStep)} steps={steps}>
      {children}
    </OnboardingProvider>
  );
}
