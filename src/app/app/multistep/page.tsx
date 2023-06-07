"use client";
import OnboardingRegistrationForm from "@/components/forms/OnboardingRegistrationForm";
import { useOnboardingForm } from "@/hooks/useOnboardingForm";

const steps = [
  <OnboardingRegistrationForm key={0} />,
  <OnboardingRegistrationForm key={1} />,
  <OnboardingRegistrationForm key={2} />,
  <OnboardingRegistrationForm key={3} />,
  <OnboardingRegistrationForm key={4} />,
];

export default function Form() {
  const { step, hasNext, hasPrevious, moveNextStep, movePrevStep } =
    useOnboardingForm(); // TODO: get initial state from query params
  const content = steps[step];

  return (
    <div className="absolute top-0 bottom-0 z-10 right-0 left-0 bg-pod-purple">
      <div className="grid gap-4 max-w-sm mx-auto">
        <div className="flex-1">{content}</div>

        <div className="bg-red-100 flex justify-between">
          <button
            className="disabled:text-gray-400"
            disabled={!hasPrevious}
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
            disabled={!hasNext}
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
