import { AppButton } from '@/components/user/app-button';
import { Title } from '@tremor/react';

export default function Home() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Main page</Title>
      <AppButton />
    </main>
  );
}
