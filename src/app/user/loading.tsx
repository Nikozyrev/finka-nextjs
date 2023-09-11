import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl text-center">
      <Spinner size="medium" />
    </div>
  );
}
