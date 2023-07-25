"use client";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { TitleLabel } from "@/shared/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Form() {
  const { step, steps, content: Component } = useOnboardingContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-50 gap-6 grid absolute right-0 left-0 bottom-0 top-0 content-center">
        <TitleLabel>Formulário de Inscrição</TitleLabel>
        <Component />

        <div className="mx-auto flex">
          {steps.map((_, idx) => (
            <StepDot
              idx={idx}
              key={idx}
              step={step}
            />
          ))}
        </div>
      </div>
    </QueryClientProvider>
  );
}

function StepDot({ idx = 0, step = 0 }) {
  let color = "bg-gray-300";
  if (idx < step) color = "bg-blue-400";
  if (idx === step) color = "bg-purple-400";
  return (
    <div
      className={`${color} w-3 h-3 mx-1 mb-6 font-medium text-2xl rounded-full`}
    />
  );
}
