import { CashAccountInfoContainer } from '@/features/cash-account-info';

export default async function AccountPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <CashAccountInfoContainer id={id} />
    </>
  );
}
