export const isSameCurrenciesAccounts = (
  cashAccounts: { id: string; currency: { id: number } }[],
  fromAccountId: string,
  toAccountId: string
) => {
  if (!fromAccountId || !toAccountId || fromAccountId === toAccountId)
    return true;

  const [account1, account2] = cashAccounts.filter(
    ({ id }) => id === fromAccountId || id === toAccountId
  );

  if (!(account1 && account2)) return false;
  return account1.currency.id === account2.currency.id;
};
