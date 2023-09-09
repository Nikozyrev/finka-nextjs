'use client';

import { FC, FormEvent, useState } from 'react';
import { Button, Card, NumberInput, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { Currency } from '@prisma/client';
import { AppSelect } from '../ui/select';

export const AddCashAccountForm: FC<{
  currencies: Currency[];
}> = ({ currencies }) => {
  const Router = useRouter();
  const [name, setName] = useState<string>('');
  const [startBalance, setStartBalance] = useState<string>('');
  const [currencyId, setCurrencyId] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !currencyId) return;
    await fetch('/api/accounts', {
      method: 'POST',
      body: JSON.stringify({
        name,
        startBalance: Number.isNaN(startBalance) ? 0 : startBalance,
        currencyId: Number(currencyId),
      }),
    });
    Router.refresh();
    return;
  };

  return (
    <Card>
      <Title className="mb-3">Add cash account</Title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextInput
          className="mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <NumberInput
          enableStepper={false}
          className="mb-3"
          placeholder="Start Balance"
          value={startBalance}
          onChange={(e) => setStartBalance(e.target.value)}
        />
        <AppSelect
          className="mb-3"
          options={currencies.map(({ id, name, symbol }) => ({
            text: `${name} (${symbol})`,
            value: id.toString(),
          }))}
          value={currencyId}
          onValueChange={setCurrencyId}
          placeholder="Currency"
        />
        <Button type="submit" disabled={!name}>
          Add Account
        </Button>
      </form>
    </Card>
  );
};
