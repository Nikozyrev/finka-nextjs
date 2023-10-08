export const IsSameCurrenciesAccounts = (
  cashAccounts: { id: string; currencyId: number }[],
  fromAccountId: string,
  toAccountId: string
) => {
  if (!fromAccountId || !toAccountId || fromAccountId === toAccountId)
    return true;

  const [account1, account2] = cashAccounts.filter(
    ({ id }) => id === fromAccountId || id === toAccountId
  );

  if (!(account1 && account2)) return false;
  return account1.currencyId === account2.currencyId;
};
