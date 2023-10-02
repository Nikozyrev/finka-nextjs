import { CashAccountInfoContainer } from '@/features/cash-account-info';
import { UpdateCashAccountForm } from '@/features/update-cash-account';

export default async function AccountPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <CashAccountInfoContainer id={id} />
      <UpdateCashAccountForm id={id} />
    </>
  );
}
