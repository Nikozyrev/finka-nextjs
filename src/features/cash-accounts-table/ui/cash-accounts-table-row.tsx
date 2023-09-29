import { Currency } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { TableRow, TableCell } from '@tremor/react';

export function CashAccountsTableRow({
  name,
  currency,
  currentBalance,
}: {
  name: string;
  currency: Currency;
  currentBalance: Decimal;
}) {
  const classes = `p-2 sm:px-3`;
  return (
    <TableRow>
      <TableCell className={`${classes}`}>{name}</TableCell>
      <TableCell className={`${classes}`}>{currency.symbol}</TableCell>
      <TableCell className={`${classes}`}>
        {currentBalance.toString()}
      </TableCell>
    </TableRow>
  );
}
