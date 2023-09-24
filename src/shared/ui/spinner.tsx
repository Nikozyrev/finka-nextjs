import { FC } from 'react';

type SpinnerSizes = 'small' | 'medium' | 'large';

interface ISpinnerProps {
  color?: string;
  size?: SpinnerSizes;
}

export const Spinner: FC<ISpinnerProps> = (props) => {
  const { color = 'text-tremor-brand-emphasis', size = 'medium' } = props;
  const dimensions = {
    ['small']: 'h-10 w-10',
    ['medium']: 'h-16 w-16',
    ['large']: 'h-20 w-20',
  };

  return (
    <div
      className={`${color} ${dimensions[size]} inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};
