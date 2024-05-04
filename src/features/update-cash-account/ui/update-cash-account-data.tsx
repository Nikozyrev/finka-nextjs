import { getUserCashAccount } from '@/entities/cash-account';
import { UpdateCashAccountForm } from './update-cash-account-form';

export async function UpdateCashAccountData({ id }: { id: string }) {
  return <UpdateCashAccountForm account={await getUserCashAccount(id)} />;
}
