import { ICashAccountFromDb } from './cash-account.model';

export const isEnoughBalance = (
  cashAccounts: ICashAccountFromDb[],
  cashAccountId: string,
  v: string | number
) => {
  const acc = cashAccounts.find(({ id }) => id === cashAccountId);
  if (!acc) return true;
  const {
    currentBalance,
    currency: { symbol },
  } = acc;
  return (
    Number(v) <= currentBalance ||
    `You have only ${currentBalance} ${symbol} :(`
  );
};
