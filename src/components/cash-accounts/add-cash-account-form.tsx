'use client';

import { FormEvent, useState } from 'react';
import { Button, Card, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';

export default function AddCashAccountForm() {
  const Router = useRouter();
  const [name, setName] = useState<string>('');
  const [startBalance, setStartBalance] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    await fetch('/api/accounts', {
      method: 'POST',
      body: JSON.stringify({
        name,
        startBalance: Number.isNaN(startBalance) ? 0 : startBalance
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
        <Button type="submit" disabled={!name}>
          Add Account
        </Button>
      </form>
    </Card>
  );
}
