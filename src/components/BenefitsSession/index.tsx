import Image from 'next/image';

export default function BenefitsSession() {
	return (
		<div className='w-full h-2/3 flex justify-center lg:px-3'>
			<div className='w-full h-full bg-slate-100 flex lg:w-4/5'>
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
					<span className='font-medium text-3xl'>
						Por que fialiar -se ao <strong>sincoimp?</strong>
					</span>

					<span>
						Tenha seus direitos garantidos além de diversos beneficios.
					</span>
					<p>textos</p>
					<p>textos</p>
					<p>textos</p>
					<p>textos</p>
				</div>
			</div>
		</div>
	);
}
