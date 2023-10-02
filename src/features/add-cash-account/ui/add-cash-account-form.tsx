'use client';

import { FormEvent, useState } from 'react';
import { Button, Card, NumberInput, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { addCashAccount } from '../api/add-cash-account';
import { CurrencySelect } from '@/entities/currency';

export function AddCashAccountForm() {
  const Router = useRouter();
  const [name, setName] = useState<string>('');
  const [startBalance, setStartBalance] = useState<string>('');
  const [currencyId, setCurrencyId] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !currencyId) return;
    await addCashAccount({ name, startBalance, currencyId });
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
          step={'0.01'}
          className="mb-3"
          placeholder="Start Balance"
          value={startBalance}
          onChange={(e) => setStartBalance(e.target.value)}
        />
        <CurrencySelect
          className="mb-3"
          value={currencyId}
          onValueChange={setCurrencyId}
        />
        <Button type="submit" disabled={!name}>
          Add Account
        </Button>
      </form>
    </Card>
  );
}
