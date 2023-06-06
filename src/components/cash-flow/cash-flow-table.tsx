import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';
import { getCashFlowData } from '../../services/cash-flow/get-cash-flow-data';
import CashFlowTableRow from './cash-flow-table-row';

export default async function CashFlowTable() {
  const categories = await getCashFlowData();

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
          {categories.map((category) => (
            <CashFlowTableRow
              key={category.id}
              category={category}
              months={months}
            />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
