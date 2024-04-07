import { Transaction } from '@prisma/client';
import { writeFileXLSX, utils, WorkBook } from 'xlsx';

function saveFile(wb: WorkBook, fileName: string): void {
  writeFileXLSX(wb, fileName);
}

function createFile(sheetName: string, data: unknown[][]): WorkBook {
  const wb = utils.book_new();
  wb.SheetNames.push(sheetName);
  wb.Sheets[sheetName] = utils.aoa_to_sheet(data, { cellDates: true });
  return wb;
}

export function saveTransactionsToExcel(transactions: Transaction[]) {
  const sheetName = 'transactions';
  const fileName = 'transactions_export.xlsx';

  const headers = [
    'id',
    'date',
    'createdAt',
    'type',
    'sum',
    'comment',
    'transferId',
    'cashAccountId',
    'categoryId',
    'userId',
  ] as (keyof Transaction)[];

  const rows = transactions.map((tr) => headers.map((key) => tr[key]));

  const data = [headers, ...rows];

  const wb = createFile(sheetName, data);
  saveFile(wb, fileName);
}
