export type Optional<T> = T | null | undefined;

export type ActionType<T> = {
  type: string;
  payload: T;
};
