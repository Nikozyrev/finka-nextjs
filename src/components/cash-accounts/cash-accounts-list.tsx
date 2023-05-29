import { Card, List, ListItem, Title } from '@tremor/react';
import { getCashAccounts } from '../../services/db/cash-accounts/get-cash-accounts';

export default async function CashAccountsList() {
  const cashAccounts = await getCashAccounts();

  return (
    <Card>
      <Title className="mb-2">Cash Accounts</Title>
      <List>
        {cashAccounts.map(({ id, name, startBalance }) => (
          <ListItem key={id}>
            <span className="mr-2">{name}</span>
            <span>{startBalance.toString()}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
