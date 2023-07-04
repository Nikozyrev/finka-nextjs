import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';
import { CashFlowSection } from '@prisma/client';
import { getCashFlowData } from '../../services/cash-flow/get-cash-flow-data';
import CashFlowTableSection from './cash-flow-table-section';
import CashFlowTableTotals from './cash-flow-table-totals';
import AppError from '../ui/error';

interface ICashFlowTableProps {
  year: number;
  currencyId: number;
}

export default async function CashFlowTable({
  year,
  currencyId
}: ICashFlowTableProps) {
  try {
    const { categories, totals } = await getCashFlowData(year, currencyId);

    const months = Array.from(new Array(12), (_, i) => i + 1);
    const tableColumns = ['Category', ...months, 'YTD'];

    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              {tableColumns.map((v) => (
                <TableHeaderCell className="text-center font-bold" key={v}>
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
  } catch (error) {
    return <AppError error={error} />;
  }
}
