import { Card, List, ListItem, Title } from '@tremor/react';
import { getTransactions } from '../../services/db/transactions/get-transactions';

export default async function TransactionsList() {
  const transactions = await getTransactions();

  return (
    <Card>
      <Title className="mb-2">Transactions</Title>
      <List>
        {transactions.map(
          ({ id, date, sum, cashAccount, category, comment }) => (
            <ListItem key={id}>
              <span>{date.toDateString()}</span>
              <span>{sum.toString()}</span>
              <span>{category.name}</span>
              <span>{cashAccount.name}</span>
              <span>{comment}</span>
            </ListItem>
          )
        )}
      </List>
    </Card>
  );
}
