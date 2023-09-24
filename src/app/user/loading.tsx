import { Spinner } from '@/shared/ui/spinner';

export default function Loading() {
  return (
    <div className="h-full flex justify-center items-center">
      <Spinner size="medium" />
    </div>
  );
}
