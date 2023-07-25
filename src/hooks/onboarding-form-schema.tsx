"use client";
import { OnboardingSchemas } from "@/shared/onboarding";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnboardingContext } from "@/contexts/OnboardingFormProvider";
import { Optional } from "@/shared/types";
import { FormState } from "@/shared/onboarding";

type Args<Schema> = {
  schema: OnboardingSchemas;
  selector: (state: FormState) => Optional<Schema>;
  onSubmitValidData: (data: Schema) => void;
};

export function useOnboardingFormSchema<Schema extends FieldValues>(
  args: Args<Schema>
) {
  const { onSubmitValidData, schema, selector } = args;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const { moveNextStep, onboarding } = useOnboardingContext();

  return {
    errors,
    register,
    formState: selector(onboarding.formState) as Schema,
    onSubmit: handleSubmit((data: Schema) => {
      const isValid = schema.safeParse(data);
      if (!isValid.success) {
        return alert("Invalid form data");
      }

      onSubmitValidData(isValid.data as unknown as Schema);
      moveNextStep();
    }),
  };
}
