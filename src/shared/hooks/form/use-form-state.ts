import { Reducer, useCallback, useReducer } from 'react';

enum ActionTypes {
  UPDATE = 'UPDATE',
  RESET = 'RESET',
}

export function useFormState<S extends object>({
  initialState,
}: {
  initialState: S;
}) {
  const reducer: Reducer<
    typeof initialState,
    {
      type: ActionTypes;
      payload?: {
        inputName: keyof S;
        value: string;
      };
    }
  > = useCallback(
    (state, action) => {
      switch (action.type) {
        case ActionTypes.UPDATE:
          if (!action.payload) return state;
          return {
            ...state,
            [action.payload.inputName]: action.payload.value,
          };
        case ActionTypes.RESET:
          return {
            ...initialState,
          };
        default:
          return state;
      }
    },
    [initialState]
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const update = (inputName: keyof S, value: string) => {
    dispatch({
      type: ActionTypes.UPDATE,
      payload: {
        inputName,
        value,
      },
    });
  };

  const reset = () => {
    dispatch({
      type: ActionTypes.RESET,
    });
  };

  return { state, update, reset };
}
