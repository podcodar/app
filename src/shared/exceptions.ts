export const raise = (error: string): never => {
  throw new Error(error);
};
