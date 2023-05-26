import { classes } from "@/shared/tw";
import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SelectHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const focusStyles = "focus:ring-2 focus:ring-inset focus:ring-indigo-600";

export const Textarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  const styles = "w-full rounded-lg border-gray-200 p-3 text-sm";
  return <textarea {...props} className={classes(styles, props.className)} />;
};

export const Title = (props: HTMLAttributes<HTMLHeadingElement>) => {
  const styles = ` text-base text-lg text-center font-semibold leading-7 text-white
  `;
  return <h2 {...props} className={classes(styles, props.className)} />;
};

export const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  const styles = `
  bg-pod-purple w-full  mx-auto my-10 p-8 rounded-lg
  md:w-9/12`;
  return <form {...props} className={classes(styles, props.className)} />;
};

export const Select = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  const styles = `
    block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300
    sm:max-w-xs sm:text-sm sm:leading-6
    ${focusStyles}
  `;
  return <select {...props} className={classes(styles, props.className)} />;
};

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  const styles = "block text-sm font-medium leading-6 text-white text-justify";
  return <label {...props} className={classes(styles, props.className)} />;
};

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const styles = `
    block w-full rounded-md border-0 py-1.5 px-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300
    placeholder:text-gray-400 sm:text-sm sm:leading-6
    ${focusStyles}
  `;
  return <input {...props} className={classes(styles, props.className)} />;
};
