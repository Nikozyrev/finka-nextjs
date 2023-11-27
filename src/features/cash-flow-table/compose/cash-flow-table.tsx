import { Card, Table, TableBody } from '@tremor/react';
import { CashFlowSection } from '@prisma/client';
import { getCashFlowData } from '../api/get-cash-flow-data';
import { CashFlowTableSection } from '../ui/cash-flow-table-section';
import { CashFlowTableTotals } from '../ui/cash-flow-table-totals';
import { CashFlowTableHead } from '../ui/cash-flow-table-head';

export async function CashFlowTable(props: {
  year?: number;
  currencyId?: number;
}) {
  const year = props.year || new Date().getFullYear();
  const currencyId = props.currencyId || 1;
  const { subcategories, categories, totals } = await getCashFlowData(
    year,
    currencyId
  );

  const months = Array.from(new Array(12), (_, i) => i + 1);

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
