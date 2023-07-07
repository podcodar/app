"use client";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";

export default function Form() {
  const {
    step,
    steps,
    canMoveNext,
    canMovePrevious,
    moveNextStep,
    movePrevStep,
    content: Component,
  } = useOnboardingContext();

  return (
    <div className="bg-white">
      <div className="grid gap-4 max-w-sm mx-auto">
        <div className="flex-1">
          <Component />
        </div>

        <div className="flex justify-between">
          <button
            className="text-white text-sm rounded-xl p-1 w-24 h-12 font-medium border-2 bg-pod-purple shadow-md"
            disabled={!canMovePrevious}
            onClick={movePrevStep}
          >
            Voltar
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
            className="text-white text-sm rounded-xl p-1 w-24 h-12 font-medium border-2 bg-pod-purple shadow-md"
            disabled={!canMoveNext}
            onClick={moveNextStep}
          >
            Continuar
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
  return <span className={`${color} font-medium text-2xl`}>o</span>;
}
