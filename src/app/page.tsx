import { Title } from '@tremor/react';
import { AppButton } from '../components/user/app-button';

export const dynamic = 'force-dynamic';

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Main page</Title>
      <AppButton />
    </main>
  );
}
