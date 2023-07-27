'use client';

import { FormEvent, useState } from 'react';
import { Button, Card, DatePicker, TextInput, Title } from '@tremor/react';
import AppSelect from '../ui/select';
import { useTransactionsApi } from '../../services/api/transactions';
import { getUTCDate } from '../../helpers/get-utc-date';

interface IAddTransactionFormProps {
  categories: { id: string; name: string }[];
  cashAccounts: { id: string; name: string }[];
}

export default function AddTransactionForm({
  cashAccounts,
  categories
}: IAddTransactionFormProps) {
  const { addTransaction } = useTransactionsApi();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sum, setSum] = useState<string>('');
  const [cashAccountId, setCashAccountId] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !cashAccountId || !categoryId) return;
    await addTransaction({
      date: getUTCDate(date),
      sum: Number(sum),
      cashAccountId,
      categoryId,
      comment
    });
  };

  return (
    <Card>
      <Title className="mb-3">Add transaction</Title>
      <form onSubmit={handleSubmit}>
        <DatePicker
          className="mb-3"
          value={date}
          onValueChange={setDate}
          enableClear={false}
        />
        <AppSelect
          className="mb-3"
          options={cashAccounts.map(({ id, name }) => ({
            value: id,
            text: name
          }))}
          value={cashAccountId}
          onValueChange={setCashAccountId}
          placeholder="Account"
        />
        <TextInput
          className="mb-3"
          placeholder="Sum"
          value={sum}
          onChange={(e) => setSum(e.target.value)}
        ></TextInput>
        <AppSelect
          className="mb-3"
          options={categories.map(({ id, name }) => ({
            value: id,
            text: name
          }))}
          value={categoryId}
          onValueChange={setCategoryId}
          placeholder="Category"
        />
        <TextInput
          className="mb-3"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></TextInput>
        <Button type="submit" disabled={!sum}>
          Add Transaction
        </Button>
      </form>
    </Card>
  );
}
