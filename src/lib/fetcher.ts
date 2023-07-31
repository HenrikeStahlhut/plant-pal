export const fetcher = (...args: unknown[]) =>
  // @ts-expect-error
  fetch(...args).then((res) => res.json());

export type ApiErrorResponse = {
  error: string;
};

export type ApiSuccessResponse = {
  success: string;
};
