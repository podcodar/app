"use client";
import { FormEventHandler } from "react";
import { Label, Form, ButtonWrapper, Button } from "@/shared/components";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { useMutation } from "@tanstack/react-query";
import { FormState } from "@/shared/onboarding";
import { useUser } from "@/contexts/UserProvider";

export default function OnboardingReview() {
  const user = useUser();
  const sendDataToApi = useMutation((data: FormState) => {
    const dataWithId = {
      data,
      id: user.id,
    };
    return fetch("/api/onboarding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWithId),
    });
  });

  const { onboarding } = useOnboardingContext();
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    sendDataToApi.mutate(onboarding.formState);
  };

  const registrationFormState = onboarding.formState.registration;
  const contactFormState = onboarding.formState.contact;
  const professionalFormState = onboarding.formState.professional;
  const aboutFormState = onboarding.formState.about;

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Label>Nome Social</Label>
        <p>{registrationFormState?.nomeSocial}</p>
      </div>

      <div>
        <Label>Gênero</Label>
        <p>{registrationFormState?.gender}</p>
      </div>

      <div>
        <Label>Idade</Label>
        <p>{registrationFormState?.idade}</p>
      </div>

      <div>
        <Label>País</Label>
        <p>{contactFormState?.pais}</p>
      </div>

      <div>
        <Label>Cidade/Estado</Label>
        <p>{contactFormState?.cidadeEstado}</p>
      </div>

      <div>
        <Label>Telefone</Label>
        <p>{contactFormState?.telefone}</p>
      </div>

      <div>
        <Label>Email</Label>
        <p>{contactFormState?.email}</p>
      </div>

      <div>
        <Label>Formação</Label>
        <p>{professionalFormState?.educationLevel}</p>
      </div>

      <div>
        <Label>Profissão</Label>
        <p>{professionalFormState?.profissao}</p>
      </div>

      <div>
        <Label>Empresa/Organização</Label>
        <p>{professionalFormState?.empresaOrganizacao}</p>
      </div>

      <div>
        <Label>GitHub/Portifólio</Label>
        <p>{professionalFormState?.githubPortifolio}</p>
      </div>

      <div>
        <Label>LinkedIn</Label>
        <p>{professionalFormState?.linkedin}</p>
      </div>

      <div>
        <Label>Questão 1</Label>
        <p>{aboutFormState?.qOne}</p>
      </div>

      <div>
        <Label>Questão 2</Label>
        <p>{aboutFormState?.qTwo}</p>
      </div>

      <ButtonWrapper>
        <Button type="submit">Finalizar</Button>
      </ButtonWrapper>
    </Form>
  );
}
