import { Card, Table, TableBody } from '@tremor/react';
import { CashFlowSection } from '@prisma/client';
import { getCashFlowData } from '../api/get-cash-flow-data';
import { CashFlowTableSection } from '../ui/cash-flow-table-section';
import { CashFlowTableTotals } from '../ui/cash-flow-table-totals';
import { CashFlowTableHead } from '../ui/cash-flow-table-head';
import { transformCFProps } from '../lib/transform-cf-props';

export async function CashFlowTable(props: {
  year?: string;
  currencyId?: string;
}) {
  const { year, currencyId, months } = transformCFProps(props);

  const { subcategories, categories, totals } = await getCashFlowData(
    year,
    currencyId
  );

  return (
    <Card className="p-4 h-full">
      <Table className="h-full relative">
        <CashFlowTableHead months={months} />

        <TableBody>
          <CashFlowTableSection
            section={CashFlowSection.OPERATIONAL}
            subcategories={subcategories}
            categories={categories}
            totals={totals}
            months={months}
          />
          <CashFlowTableSection
            section={CashFlowSection.INVESTMENTS}
            subcategories={subcategories}
            categories={categories}
            totals={totals}
            months={months}
          />
          <CashFlowTableTotals totals={totals} months={months} />
        </TableBody>
      </Table>
    </Card>
  );
}
