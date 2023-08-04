import { Card, List, ListItem, Title } from '@tremor/react';
import { getCashAccountsWithBalances } from '../../services/cash-accounts-balances/get-cash-accounts-with-balances';

export const CashAccountsList = async () => {
  const accountsWithActualBalances = await getCashAccountsWithBalances();

  return (
    <Card>
      <Title className="mb-2">Cash Accounts</Title>
      <List>
        {accountsWithActualBalances.map(
          ({ id, name, startBalance, currentBalance, currency }) => (
            <ListItem key={id}>
              <span className="mr-2">{name}</span>
              <span>{currency.symbol}</span>
              <span>{startBalance.toString()}</span>
              <span>{currentBalance.toString()}</span>
            </ListItem>
          )
        )}
      </List>
    </Card>
  );
};
