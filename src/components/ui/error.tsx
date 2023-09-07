import { FC } from 'react';

export const AppError: FC<{ error: unknown }> = ({ error }) => {
  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>Error: Something went wrong</div>;
};
