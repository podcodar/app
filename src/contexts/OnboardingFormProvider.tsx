"use client";
import { FC, useState, createContext, ReactNode, useContext } from "react";
import { raise } from "@/shared/exceptions";

type OnboardingContextProps = {
  steps: Step[];
  children: ReactNode;
  initialStep?: number;
};

export type Step = {
  content: FC;
};

type OnboardingContextValues = {
  step: number;
  steps: Step[];
  canMovePrevious: boolean;
  canMoveNext: boolean;
  content: FC;
  moveNextStep: () => void;
  movePrevStep: () => void;
};

export const OnboardingProvider: FC<OnboardingContextProps> = ({
  steps,
  children,
  initialStep = 0,
}) => {
  const [step, setStep] = useState(initialStep);
  const canMovePrevious = step !== 0;
  const canMoveNext = step !== steps.length - 1;
  const { content } = steps[step];

  //TODO: Create ActionFunction to abrigate
  // const actions = createActions(...states)
  function moveNextStep() {
    if (!canMoveNext) return;
    setStep((step) => step + 1);
  }

  function movePrevStep() {
    if (!canMovePrevious) return;
    setStep((step) => step - 1);
  }

  // const values = createValues(...states)
  const values: OnboardingContextValues = {
    step,
    steps,
    canMovePrevious,
    canMoveNext,
    content,
    moveNextStep,
    movePrevStep,
  };

  return (
    <OnboardingContext.Provider value={values}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = (): OnboardingContextValues => {
  const context = useContext(OnboardingContext);
  if (!context) return raise("No OnboardingContext found");
  return context;
};

const OnboardingContext = createContext<OnboardingContextValues | null>(null);
