import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const mono = Roboto_Mono({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Number Base Converter',
  description: 'Number base converter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
