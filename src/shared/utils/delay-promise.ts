export const delayPromise =
  (ms: number) =>
  <T>(v: T): Promise<T> =>
    new Promise((r) => setTimeout(() => r(v), ms));
