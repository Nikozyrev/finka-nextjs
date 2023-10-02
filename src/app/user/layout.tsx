import { AppSidebar } from '@/widgets/sidebar';
import { AddTransaction } from '@/features/add-transaction';
import { CurrencyProvider } from '@/entities/currency';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CurrencyProvider>
        <div className="h-screen sm:flex">
          <AppSidebar />
          <main className="p-4 mx-auto max-w-6xl flex-grow h-fit sm:h-full sm:overflow-y-auto">
            {children}
          </main>
        </div>
        <AddTransaction />
      </CurrencyProvider>
    </>
  );
}
