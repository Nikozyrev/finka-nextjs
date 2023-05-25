import { Title } from '@tremor/react';
import { AuthGuard } from '../../../guards/auth-guard';

export default async function AccountsPage() {
  await AuthGuard();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Accounts page</Title>
    </main>
  );
}
