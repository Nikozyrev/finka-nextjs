import { Spinner } from '@/shared/ui/spinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner size="large" />
    </div>
  );
}
