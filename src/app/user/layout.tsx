import { AppSidebar } from '@/components/user/app-sidebar';
import { AddTransactionModal } from '@/components/transactions/add-transaction-modal';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen sm:flex">
        <AppSidebar />
        <main className="p-4 mx-auto max-w-6xl flex-grow h-fit sm:h-full sm:overflow-y-auto">
          {children}
        </main>
      </div>
      <AddTransactionModal />
    </>
  );
}
