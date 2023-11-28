import Image from 'next/image';
import Link from 'next/link';

export default function BenefitsSession() {
	return (
		<div className='w-full h-4/5 flex justify-center lg:px-3 lg:h-2/3 md:h-1/2 sm:h-2/3'>
			<div className='w-full h-full flex lg:w-4/5'>
				<div className='hidden lg:w-1/2 lg:flex'>
					<Image
						src='image-default.svg'
						alt='default image'
						width={0}
						height={0}
						className='w-full h-full bg-contain'
					/>
				</div>

				<div className='w-full flex flex-col items-center pt-8 lg:w-1/2'>
					<span className='font-medium text-3xl px-8 sm:px-0'>
						Por que fialiar -se ao <strong>sincoimp?</strong>
					</span>

					<span className='px-8 sm:px-0'>
						Tenha seus direitos garantidos além de diversos beneficios.
					</span>

					<div className='px-8 w-full grid grid-cols-2 gap-2 mt-10 lg:px-0'>
						<div className='flex items-center mb-10'>
							<Image
								src='icon-fake.svg'
								width={30}
								height={30}
								alt='Icon fake'
							/>

							<p className='ml-4 text-sm'>Consultas juridícas</p>
						</div>

						<div className='flex items-center mb-10'>
							<Image
								src='icon-fake.svg'
								width={30}
								height={30}
								alt='Icon fake'
							/>

							<p className='ml-4 text-sm'>
								Descontos em estabelecimentos de ensino
							</p>
						</div>

						<div className='flex items-center mb-10'>
							<Image
								src='icon-fake.svg'
								width={30}
								height={30}
								alt='Icon fake'
							/>

							<p className='ml-4 text-sm'>Descontos em laboratórios</p>
						</div>

						<div className='flex items-center mb-10'>
							<Image
								src='icon-fake.svg'
								width={30}
								height={30}
								alt='Icon fake'
							/>

							<p className='ml-4 text-sm'>Consultas juridícas</p>
						</div>

						<div className='flex items-center mb-10'>
							<Image
								src='icon-fake.svg'
								width={30}
								height={30}
								alt='Icon fake'
							/>

							<p className='ml-4 text-sm'>Atendimento odontológico</p>
						</div>

						<div className='flex items-center mb-10'>
							<Image
								src='icon-fake.svg'
								width={30}
								height={30}
								alt='Icon fake'
							/>

							<p className='ml-4 text-sm'>Descontos em farmâcias</p>
						</div>
					</div>

					<div className='pl-8 w-full lg:pl-0'>
						<Link
							href='/'
							className='flex items-center w-[150px] py-2 px-4 justify-center border-2 bg-red-700 rounded-3xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out text-[12px] text-white'
						>
							Filiar-me
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
					</div>
				</div>
			</div>
		</div>
	);
}
