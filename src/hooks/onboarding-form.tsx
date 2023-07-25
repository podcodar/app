import {
  AboutSchema,
  ContactSchema,
  ProfessionalSchema,
  RegistrationSchema,
  FormState,
} from "@/shared/onboarding";
import { Dispatch, SetStateAction, useState } from "react";

const initialState: FormState = {};

export function useOnboardingFormState() {
  const [formState, setFormState] = useState(initialState);
  const actions = createActions(setFormState);

  return {
    formState,
    actions,
  };
}

function createActions(setFormState: Dispatch<SetStateAction<FormState>>) {
  return {
    setRegistration: (registration: RegistrationSchema) =>
      setFormState((state) => ({ ...state, registration })),
    setAbout: (about: AboutSchema) =>
      setFormState((state) => ({ ...state, about })),
    setProfessional: (professional: ProfessionalSchema) =>
      setFormState((state) => ({ ...state, professional })),
    setContact: (contact: ContactSchema) =>
      setFormState((state) => ({ ...state, contact })),
  };
}
