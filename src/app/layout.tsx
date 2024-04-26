import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import './globals.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finka',
  description: 'Best financial app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <PrimeReactProvider>
        <body className={`${inter.className} h-full`}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
