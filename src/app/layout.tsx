import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Poppins({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  subsets: ['latin'],
});

const theme = process.env.CLIENT_NAME || 'default';
const iconPath = `/clients/${theme}/favicon.svg`;

export const metadata: Metadata = {
  title: process.env.PAGE_TITLE,
  description: process.env.PAGE_DESCRIPTION,
  icons: {
    icon: iconPath,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
