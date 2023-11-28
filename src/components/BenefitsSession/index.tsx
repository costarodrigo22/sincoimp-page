import Image from 'next/image';
import Link from 'next/link';
import ButtonNavigation from '../ButtonNavigation';

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
						<ButtonNavigation label='Filiar-me' navigateTo='/' />
					</div>
				</div>
			</div>
		</div>
	);
}
