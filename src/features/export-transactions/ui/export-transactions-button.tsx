'use client';

import { AppButton } from '@/shared/ui/button';
import { Transaction } from '@prisma/client';
import { saveTransactionsToExcel } from '../model/save-transactions-to-excel';

export function ExportTransactionsButton({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <AppButton onClick={() => saveTransactionsToExcel(transactions)}>
      Export
    </AppButton>
  );
}
