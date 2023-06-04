import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react';
import { getSumsByCategories } from '../../services/db/transactions/get-sums-by-categories';

export default async function CashFlowTable() {
  const cashFlowData = await getSumsByCategories();
  const categories = cashFlowData.reduce(
    (acc, val) =>
      acc.includes(val.main_category) ? acc : [...acc, val.main_category],
    [] as string[]
  );
  const months = Array.from(new Array(12), (_, i) => i + 1);
  const tableColumns = ['Category', ...months];

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map((v) => (
              <TableHeaderCell key={v}>{v}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {categories.map((category) => (
            <TableRow key={category}>
              <TableCell>{category}</TableCell>
              {months.map((m) => {
                const cellData = cashFlowData.find(
                  ({ main_category, month }) =>
                    main_category === category && month === m
                );
                return (
                  <TableCell key={m}>{cellData?.sum_BYN.toFixed(0)}</TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
