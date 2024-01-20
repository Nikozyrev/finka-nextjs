import { Title } from '@tremor/react';
import { FetchRatesForm } from '@/features/get-currency-rates';

export default async function DashboardPage() {
  return (
    <>
      <Title>Dashboard page</Title>

      <div className='max-w-xs mt-2'>
        <FetchRatesForm/>
      </div>
    </>
  );
}
