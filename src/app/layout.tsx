import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { useEnvStore } from './contexts/EnvContext';

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

useEnvStore.setState({
	pageTitle: process.env.PAGE_TITLE,
	pageDescription: process.env.PAGE_DESCRIPTION,
	clientName: process.env.NEXT_PUBLIC_CLIENT_NAME,
});

const theme = useEnvStore.getState().clientName;

const iconPath = `/clients/${theme}/favicon.svg`;

export const metadata: Metadata = {
	title: useEnvStore.getState().pageTitle,
	description: useEnvStore.getState().pageDescription,
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
		<html lang='pt-BR'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
