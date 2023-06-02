'use client';

import { FormEvent, useState } from 'react';
import { Button, Card, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { Currency } from '@prisma/client';
import AppSelect from '../ui/select';

export default function AddCashAccountForm({
  currencies
}: {
  currencies: Currency[];
}) {
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
        currencyId: Number(currencyId)
      })
    });
    Router.refresh();
    return;
  };

  return (
    <Card>
      <Title className="mb-3">Add cash account</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          className="mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextInput>
        <TextInput
          className="mb-3"
          placeholder="Start Balance"
          value={startBalance}
          onChange={(e) => setStartBalance(e.target.value)}
        ></TextInput>
        <AppSelect
          className="mb-2"
          options={currencies.map(({ id, name, symbol }) => ({
            text: `${name} (${symbol})`,
            value: id.toString()
          }))}
          value={currencyId}
          onValueChange={setCurrencyId}
          placeholder="Currency"
        ></AppSelect>
        <Button type="submit" disabled={!name}>
          Add Account
        </Button>
      </form>
    </Card>
  );
}
