import { Title } from '@tremor/react';
import { AuthGuard } from '../../../guards/auth-guard';

export default async function CategoriesPage() {
  await AuthGuard();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Categories page</Title>
    </main>
  );
}
