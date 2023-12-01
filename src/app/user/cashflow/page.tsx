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
  return (
    <Grid className="w-fit h-full gap-2 grid-rows-[auto,minmax(0,1fr)]">
      <Col>
        <Suspense fallback={<Spinner />}>
          <CashFlowFilters
            currencyId={searchParams?.currency}
            year={searchParams?.year}
          />
        </Suspense>
      </Col>
      <Col>
        <Suspense fallback={<Spinner />}>
          <CashFlowTable
            currencyId={searchParams?.currency}
            year={searchParams?.year}
          />
        </Suspense>
      </Col>
    </Grid>
  );
}
