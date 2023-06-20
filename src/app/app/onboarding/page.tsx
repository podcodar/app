"use client";
import OnboardingAbout from "@/components/forms/OnboardingAbout";
import OnboardingProfessional from "@/components/forms/OnboardingProfessional";
import OnboardingContact from "@/components/forms/OnboardingContact";
import OnboardingRegistration from "@/components/forms/OnboardingRegistration";
import { useOnboardingForm } from "@/hooks/useOnboardingForm";
import { useSearchParams } from "next/navigation";

const steps = [
  <OnboardingRegistration key={0} />,
  <OnboardingContact key={1} />,
  <OnboardingProfessional key={2} />,
  <OnboardingAbout key={3} />,
];

export default function Form() {
  const searchParams = useSearchParams();
  const initialStep = searchParams.get("step") ?? "0";
  const stepNumber = parseInt(initialStep, 10);

  const {
    step,
    content,
    canMoveNext,
    canMovePrevious,
    moveNextStep,
    movePrevStep,
  } = useOnboardingForm(stepNumber, steps);

  return (
    <div className="absolute top-0 bottom-0 z-10 right-0 left-0 bg-pod-purple">
      <div className="grid gap-4 max-w-sm mx-auto">
        <div className="flex-1">{content}</div>

        <div className="bg-red-100 flex justify-between">
          <button
            className="disabled:text-gray-400"
            disabled={!canMovePrevious}
            onClick={movePrevStep}
          >
            prev
          </button>

          <div>
            {steps.map((_, idx) => (
              <StepDot
                idx={idx}
                key={idx}
                step={step}
              />
            ))}
          </div>

          <button
            className="disabled:text-gray-400"
            disabled={!canMoveNext}
            onClick={moveNextStep}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

function StepDot({ idx = 0, step = 0 }) {
  let color = "text-gray-300";
  if (idx < step) color = "text-blue-400";
  if (idx === step) color = "text-purple-400";
  return <span className={color}>o</span>;
}
