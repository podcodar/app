"use client";
import { useState } from "react";

export enum FormSteps {
  REGISTRATION,
  ADDRESS,
  CONTACT,
  ABOUT_YOU,
  PROFESSIONAL_EXP,
}

export function useOnboardingForm(initialStep = FormSteps.REGISTRATION) {
  const [step, setStep] = useState<FormSteps>(initialStep);
  const hasPrevious = step !== FormSteps.REGISTRATION;
  const hasNext = step !== FormSteps.PROFESSIONAL_EXP;

  function moveNextStep() {
    // TODO: validate
    if (!hasNext) return; // TODO: redirect to success or submit
    setStep((step) => step + 1);
  }

  function movePrevStep() {
    // TODO: validate
    if (!hasPrevious) return; // TODO: redirect to success or submit
    setStep((step) => step - 1);
  }

  return {
    step,
    hasNext,
    hasPrevious,
    moveNextStep,
    movePrevStep,
  };
}
