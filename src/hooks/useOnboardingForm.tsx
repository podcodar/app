"use client";
import { useState } from "react";

export enum FormSteps {
  REGISTRATION,
  CONTACT,
  PROFESSIONAL_EXP,
  ABOUT_YOU,
}

export function useOnboardingForm(initialStep = FormSteps.REGISTRATION) {
  const [step, setStep] = useState<FormSteps>(initialStep);
  const canMovePrevious = step !== FormSteps.REGISTRATION;
  const canMoveNext = step !== FormSteps.ABOUT_YOU;

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
    canMoveNext,
    canMovePrevious,
    moveNextStep,
    movePrevStep,
  };
}
