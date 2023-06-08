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
  const state = useOnboardingFormStates();
  const canMovePrevious = step !== FormSteps.REGISTRATION;
  const canMoveNext = step !== FormSteps.PROFESSIONAL_EXP && state.valid;

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
    state,
    canMoveNext,
    canMovePrevious,
    moveNextStep,
    movePrevStep,
  };
}

function useOnboardingFormStates() {
  // TODO: zod + form states
  return { valid: true };
}
