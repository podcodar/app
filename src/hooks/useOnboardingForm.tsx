"use client";
import { FC, useState } from "react";

export type FormProps = {
  onSubmit: () => void;
  moveNextStep: () => void;
};

export function useOnboardingForm(initialStep = 0, steps: FC<FormProps>[]) {
  const [step, setStep] = useState(initialStep);
  const canMovePrevious = step !== 0;
  const canMoveNext = step !== steps.length - 1;
  const content = steps[step];

  function moveNextStep() {
    if (!canMoveNext) return;
    setStep((step) => step + 1);
  }

  function movePrevStep() {
    if (!canMovePrevious) return;
    setStep((step) => step - 1);
  }

  return {
    step,
    content,
    canMoveNext,
    canMovePrevious,
    moveNextStep,
    movePrevStep,
  };
}
