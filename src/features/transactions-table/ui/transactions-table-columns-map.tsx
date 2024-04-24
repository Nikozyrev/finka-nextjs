import { ReactNode } from 'react';
import { TransactionType } from '@prisma/client';
import { IUserTransaction } from '@/entities/transaction';
import { DeleteTransactionButton } from '@/features/delete-transaction';

type RenderTransactionCell = (transaction: IUserTransaction) => ReactNode;

const types = {
  [TransactionType.EXTERNAL]: 'EXT',
  [TransactionType.INTERNAL]: 'INT',
};

const transactionsTableColumnsMap = new Map<string, RenderTransactionCell>([
  ['Date', ({ date }) => date.toLocaleDateString()],
  ['Sum', ({ sum }) => <div className="text-right">{sum.toString()}</div>],
  ['Account', ({ cashAccount }) => cashAccount.name],
  ['Type', ({ type }) => types[type]],
  ['Category', ({ category }) => (category ? category.name : '-')],
  ['Comment', ({ comment }) => comment],
  ['Actions', ({ id }) => <DeleteTransactionButton id={id} />],
]);

const transactionsTableColumns = Array.from(transactionsTableColumnsMap.keys());

export { transactionsTableColumnsMap, transactionsTableColumns };
