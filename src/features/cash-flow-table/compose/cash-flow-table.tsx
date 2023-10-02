import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { CashFlowSection } from '@prisma/client';
import { getCashFlowData } from '../api/get-cash-flow-data';
import { CashFlowTableSection } from '../ui/cash-flow-table-section';
import { CashFlowTableTotals } from '../ui/cash-flow-table-totals';

export const CashFlowTable = async (props: {
  year?: number;
  currencyId?: number;
}) => {
  const year = props.year || new Date().getFullYear();
  const currencyId = props.currencyId || 1;
  const { categories, totals } = await getCashFlowData(year, currencyId);

  const months = Array.from(new Array(12), (_, i) => i + 1);
  const tableColumns = ['Category', ...months, 'YTD'];

  return (
    <Card className="p-4 h-full">
      <Table className="h-full relative">
        <TableHead className="">
          <TableRow>
            {tableColumns.map((v, i) => (
              <TableHeaderCell
                className={
                  'py-2 text-center font-bold bg-white' +
                  (i === 0 ? ' sticky top-0 left-0 z-[1]' : '')
                }
                key={v}
              >
                {v}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <CashFlowTableSection
            section={CashFlowSection.OPERATIONAL}
            categories={categories}
            totals={totals}
            months={months}
          />
          <CashFlowTableSection
            section={CashFlowSection.INVESTMENTS}
            categories={categories}
            totals={totals}
            months={months}
          />
          <CashFlowTableTotals totals={totals} months={months} />
        </TableBody>
      </Table>
    </Card>
  );
};
