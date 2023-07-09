'use client';

import { FormEvent, useState } from 'react';
import {
  Button,
  Card,
  DateRangePicker,
  DateRangePickerValue,
  TextInput,
  Title
} from '@tremor/react';
import AppSelect from '../ui/select';
import { useTransactionsApi } from '../../services/api/transactions';

interface IAddTransactionFormProps {
  categories: { id: string; name: string }[];
  cashAccounts: { id: string; name: string }[];
}

export default function AddTransactionForm({
  cashAccounts,
  categories
}: IAddTransactionFormProps) {
  const { addTransaction } = useTransactionsApi();
  const [date, setDate] = useState<DateRangePickerValue>([new Date()]);
  const [sum, setSum] = useState<string>('');
  const [cashAccountId, setCashAccountId] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date[0] || !cashAccountId || !categoryId) return;
    await addTransaction({
      date: date[0],
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
        <DateRangePicker
          className="max-w-sm mx-auto mb-3"
          value={date}
          onValueChange={setDate}
          enableDropdown={false}
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
