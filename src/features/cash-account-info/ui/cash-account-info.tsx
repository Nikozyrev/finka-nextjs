import { Flex } from '@tremor/react';
import { getUserCashAccount } from '../api/get-user-cash-account';

export async function CashAccountInfo({ id }: { id: string }) {
  const account = await getUserCashAccount(id);

  return (
    <Flex>
      <div>{account.name}</div>
      <div>{account.currency.symbol}</div>
      <div>{account.startBalance.toNumber()}</div>
    </Flex>
  );
}