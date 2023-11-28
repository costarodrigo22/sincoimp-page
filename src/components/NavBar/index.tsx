'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
	const [openMenuResponsive, setOpenMenuResponsive] = useState(false);

	function handleMenuResponsive() {
		setOpenMenuResponsive(!openMenuResponsive);
	}

	return (
		<>
			<nav className='hidden flex-row justify-between bg-white w-full rounded-b-3xl shadow-md px-8 py-6 md:flex lg:w-3/4'>
				<Image src='logo.svg' alt='Logo do sindicato' width={90} height={90} />

				<div className='w-2/4 flex justify-between items-center text-sm font-medium'>
					<span>Início</span>
					<span>Institucional</span>
					<span>Convenções</span>
					<span>Serviços</span>
				</div>

				<div className='flex items-center w-40 justify-center border-2 border-black rounded-3xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out'>
					<span className='font-medium'>Emita seu boleto</span>
				</div>
			</nav>

			<nav className='flex flex-col w-full fixed md:hidden z-10'>
				<button
					data-collapse-toggle='navbar-default'
					type='button'
					className='absolute top-4 left-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
					aria-controls='navbar-default'
					aria-expanded='false'
					onClick={handleMenuResponsive}
				>
					{openMenuResponsive && (
						<svg
							className='w-6 h-6 text-gray-800 dark:text-white'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 14'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
							/>
						</svg>
					)}
					{!openMenuResponsive && (
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					)}
				</button>

				{openMenuResponsive && (
					<div className='flex flex-col h-screen px-4 py-16 bg-slate-50 gap-6 w-[300px] shadow-lg'>
						<span className='cursor-pointer font-medium mt-4'>Início</span>
						<span className='cursor-pointer font-medium'>Institucional</span>
						<span className='cursor-pointer font-medium'>Convenções</span>
						<span className='cursor-pointer font-medium'>Serviços</span>
						<span className='cursor-pointer font-medium'>Emita seu boleto</span>
					</div>
				)}
			</nav>
		</>
	);
}
