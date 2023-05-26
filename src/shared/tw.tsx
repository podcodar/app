type Optional<T> = T | null | undefined;

export function classes(...classes: Optional<string>[]) {
  return classes.filter(Boolean).join(" ");
}

export const container = "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8";
