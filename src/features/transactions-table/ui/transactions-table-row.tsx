import { TransactionType } from '@prisma/client';
import { TableCell, TableRow } from '@tremor/react';
import { IUserTransaction } from '@/entities/transaction/model/transaction.model';
import { DeleteTransactionButton } from '@/components/transactions/delete-transaction-button';

export const TransactionsTableRow = ({
  tr: { id, date, sum, cashAccount, category, comment, type },
}: {
  tr: IUserTransaction;
}) => {
  const classes = 'py-1 px-2';
  const types = {
    [TransactionType.EXTERNAL]: 'EXT',
    [TransactionType.INTERNAL]: 'INT',
  };

  return (
    <TableRow>
      <TableCell className={classes}>{date.toLocaleDateString()}</TableCell>
      <TableCell className={classes}>{sum.toString()}</TableCell>
      <TableCell className={classes}>{cashAccount.name}</TableCell>
      <TableCell className={classes}>{types[type]}</TableCell>
      <TableCell className={classes}>
        {category ? category.name : '-'}
      </TableCell>
      <TableCell className={classes}>{comment}</TableCell>
      <TableCell className={classes}>
        <DeleteTransactionButton id={id} />
      </TableCell>
    </TableRow>
  );
};
