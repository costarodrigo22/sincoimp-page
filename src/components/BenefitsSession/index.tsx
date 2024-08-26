import Image from 'next/image';
import Link from 'next/link';
import ButtonNavigation from '../ButtonNavigation';

export default function BenefitsSession() {
	return (
		<div className='w-full h-4/5 flex justify-center lg:px-3 lg:h-2/3 md:h-4/5 sm:h-2/3'>
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

				<div className='relative w-full flex flex-col items-center pt-8 lg:w-1/2'>
					<Image
						src='backdrop-image.svg'
						width={77}
						height={180}
						alt='Icon fake'
						className='absolute right-0 -top-0.5'
					/>
					<span className='font-medium text-3xl px-8 sm:px-0'>
						Por que fialiar -se ao <strong>sincoimp?</strong>
					</span>
					<span className='px-8 sm:px-0'>
						Tenha seus direitos garantidos além de diversos beneficios.
					</span>
					<div className='px-8 w-full grid grid-cols-2 gap-2 mt-10 lg:px-0'>
						<div className='flex items-center mb-10'>
							<div className='bg-[#B500001A] w-14 h-14 rounded-full flex items-center justify-center'>
								<Image
									src='icon-fake.svg'
									width={30}
									height={30}
									alt='Icon fake'
								/>
							</div>

							<p className='ml-4 text-sm'>Consultas juridícas</p>
						</div>

						<div className='flex items-center mb-10'>
							<div className='bg-[#B500001A] w-14 h-14 rounded-full flex items-center justify-center'>
								<Image
									src='icon-fake.svg'
									width={30}
									height={30}
									alt='Icon fake'
								/>
							</div>

							<p className='ml-4 text-sm'>
								Descontos em estabelecimentos de ensino
							</p>
						</div>

						<div className='flex items-center mb-10'>
							<div className='bg-[#B500001A] w-14 h-14 rounded-full flex items-center justify-center'>
								<Image
									src='icon-fake.svg'
									width={30}
									height={30}
									alt='Icon fake'
								/>
							</div>

							<p className='ml-4 text-sm'>Descontos em laboratórios</p>
						</div>

						<div className='flex items-center mb-10'>
							<div className='bg-[#B500001A] w-14 h-14 rounded-full flex items-center justify-center'>
								<Image
									src='icon-fake.svg'
									width={30}
									height={30}
									alt='Icon fake'
								/>
							</div>

							<p className='ml-4 text-sm'>Consultas juridícas</p>
						</div>

						<div className='flex items-center mb-10'>
							<div className='bg-[#B500001A] w-14 h-14 rounded-full flex items-center justify-center'>
								<Image
									src='icon-fake.svg'
									width={30}
									height={30}
									alt='Icon fake'
								/>
							</div>

							<p className='ml-4 text-sm'>Atendimento odontológico</p>
						</div>

						<div className='flex items-center mb-10'>
							<div className='bg-[#B500001A] w-14 h-14 rounded-full flex items-center justify-center'>
								<Image
									src='icon-fake.svg'
									width={30}
									height={30}
									alt='Icon fake'
								/>
							</div>

							<p className='ml-4 text-sm'>Descontos em farmâcias</p>
						</div>
					</div>
					<div className='flex pl-8 w-full lg:pl-0 items-center justify-center'>
						<ButtonNavigation label='Quero me Filiar' navigateTo='/' />
					</div>
				</div>
			</div>
		</div>
	);
}
