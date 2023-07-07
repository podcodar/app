import {
  AboutSchema,
  ContactSchema,
  ProfessionalSchema,
  RegistrationSchema,
} from "@/shared/onboarding";
import { Optional } from "@/shared/types";
import { Dispatch, SetStateAction, useState } from "react";

type FormState = {
  registration: Optional<RegistrationSchema>;
  about: Optional<AboutSchema>;
  contact: Optional<ContactSchema>;
  professional: Optional<ProfessionalSchema>;
};

const initialState: FormState = {
  about: null,
  contact: null,
  professional: null,
  registration: null,
};

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
