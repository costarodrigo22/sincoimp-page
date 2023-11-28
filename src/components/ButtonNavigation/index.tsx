import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
	label: string;
	navigateTo: string;
}

export default function ButtonNavigation({ label, navigateTo }: ButtonProps) {
	return (
		<Link
			href={navigateTo}
			className='flex items-center w-[150px] py-2 px-4 justify-center border-2 bg-red-700 rounded-3xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out text-[12px] text-white'
		>
			{label}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				className='w-6 h-6 ml-2'
			>
				<path
					stroke-linecap='round'
					stroke-linejoin='round'
					d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
				/>
			</svg>
		</Link>
	);
}
