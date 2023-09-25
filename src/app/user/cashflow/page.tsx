import { Suspense } from 'react';
import { Col, Grid } from '@tremor/react';
import { CashFlowTable, CashFlowFilters } from '@/features/cash-flow-table';
import { Spinner } from '@/shared/ui/spinner';

interface ICashFlowPageProps {
  searchParams?: {
    year?: string;
    currency?: string;
  };
}

export default async function CashFlowPage({
  searchParams,
}: ICashFlowPageProps) {
  const year = Number(searchParams?.year);
  const currencyId = Number(searchParams?.currency);

  return (
    <Grid className="h-full gap-2 grid-rows-[auto,minmax(0,1fr)]">
      <Col>
        <Suspense fallback={<Spinner />}>
          <CashFlowFilters currencyId={currencyId} year={year} />
        </Suspense>
      </Col>
      <Col>
        <Suspense fallback={<Spinner />}>
          <CashFlowTable currencyId={currencyId} year={year} />
        </Suspense>
      </Col>
    </Grid>
  );
}
