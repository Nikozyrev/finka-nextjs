import { Currency } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import Link from 'next/link';
import { TableRow, TableCell } from '@tremor/react';
import { CurrencyBadge } from '@/entities/currency';
import { ROUTES } from '@/shared/constants/routes';

export function CashAccountsTableRow({
  id,
  name,
  currency,
  currentBalance,
}: {
  id: string;
  name: string;
  currency: Currency;
  currentBalance: Decimal;
}) {
  const classes = `p-2 sm:px-3`;
  return (
    <TableRow>
      <TableCell className={`${classes}`}>
        <Link className="underline" href={`${ROUTES.USER_ACCOUNTS}/${id}`}>
          {name}
        </Link>
      </TableCell>
      <TableCell className={`${classes}`}>
        <CurrencyBadge symbol={currency.symbol} />
      </TableCell>
      <TableCell className={`${classes}`}>
        {currentBalance.toString()}
      </TableCell>
    </TableRow>
  );
}
