import { useFormState } from './use-form-state';

export type Validator<T> = (v: T) => boolean;

type FormValidators<S extends object> = {
  [key in keyof S]?: Validator<S[key]>[];
};

const validateField = <T>(validators: Validator<T>[], value: T) =>
  validators.every((f) => f(value));

export function useValidatedForm<S extends object>({
  initialState,
  validators,
}: {
  initialState: S;
  validators?: FormValidators<S>;
}) {
  const formState = useFormState({ initialState });

  const validatedStateEntries = (
    Object.entries(formState.state) as [keyof S, S[keyof S]][]
  ).map(
    ([key, value]) =>
      [
        key,
        {
          value,
          isValid: validateField(
            validators ? validators[key] || [] : [],
            value
          ),
        },
      ] as const
  );

  const validatedState = Object.fromEntries(validatedStateEntries) as {
    [k in keyof S]: {
      value: S[k];
      isValid: boolean;
    };
  };
  const isValid = validatedStateEntries.every((field) => field[1].isValid);

  return {
    getState: () => formState.state,
    fields: validatedState,
    isValid,
    update: formState.update,
    reset: formState.reset,
  };
}
