import '../styles/globals.css';

export const metadata = {
  title: 'Finka',
  description: 'Best financial app'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">{children}</body>
    </html>
  );
}
