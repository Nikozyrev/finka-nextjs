import { Card, List, ListItem, Title } from '@tremor/react';
import { getTransactions } from '@/services/db/transactions/get-transactions';
import { DeleteTransactionButton } from './delete-transaction-button';

export const TransactionsList = async () => {
  const transactions = await getTransactions();

  return (
    <Card>
      <Title className="mb-2">Transactions</Title>
      <List>
        {transactions.map(
          ({ id, date, sum, cashAccount, category, comment, type }) => (
            <ListItem key={id}>
              <span>{date.toLocaleDateString()}</span>
              <span>{sum.toString()}</span>
              <span>{category ? category.name : '-'}</span>
              <span>{cashAccount.name}</span>
              <span>{comment}</span>
              <DeleteTransactionButton id={id} />
            </ListItem>
          )
        )}
      </List>
    </Card>
  );
};
