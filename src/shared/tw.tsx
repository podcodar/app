import { Optional } from "./types";

export function classes(...classes: Optional<string>[]) {
  return classes.filter(Boolean).join(" ");
}
