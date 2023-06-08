"use client";
import OnboardingAboutForm from "@/components/forms/OnboardingAboutForm";
import OnboardingProfessionalForm from "@/components/forms/OnboardingProfessionalForm";
import OnboardingContactForm from "@/components/forms/OnboardingContactForm";
import OnboardingRegistrationForm from "@/components/forms/OnboardingRegistrationForm";
import { useOnboardingForm } from "@/hooks/useOnboardingForm";
import { useSearchParams } from "next/navigation";

const steps = [
  <OnboardingRegistrationForm key={0} />,
  <OnboardingContactForm key={1} />,
  <OnboardingProfessionalForm key={2} />,
  <OnboardingAboutForm key={3} />,
];

//TODO: Submit go to Next Button
//TODO: Add persistence and validation to the form
//TODO: Create Buttons
//TODO: Design
//TODO: Transform progress dots into individual component

export default function Form() {
  const searchParams = useSearchParams();
  const urlStep = searchParams.get("step") ?? "0";

  const { step, canMoveNext, canMovePrevious, moveNextStep, movePrevStep } =
    useOnboardingForm(parseInt(urlStep, 10));

  const content = steps[step];

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
