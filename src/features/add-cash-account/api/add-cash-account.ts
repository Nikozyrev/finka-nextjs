export const addCashAccount = async ({
  name,
  startBalance,
  currencyId,
}: {
  name: string;
  startBalance: string;
  currencyId: string;
}) => {
  return fetch('/api/accounts', {
    method: 'POST',
    body: JSON.stringify({
      name,
      startBalance: Number.isNaN(startBalance) ? 0 : startBalance,
      currencyId: Number(currencyId),
    }),
  });
};
