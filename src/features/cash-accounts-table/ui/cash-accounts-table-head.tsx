import { TableHead, TableRow, TableHeaderCell } from '@tremor/react';

export function CashAccountsTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell className="p-2 sm:px-3">Account</TableHeaderCell>
        <TableHeaderCell className="p-2 sm:px-3">Currency</TableHeaderCell>
        <TableHeaderCell className="p-2 sm:px-3">Balance</TableHeaderCell>
      </TableRow>
    </TableHead>
  );
}
