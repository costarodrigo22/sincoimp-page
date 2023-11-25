import Image from 'next/image';

export default function BenefitsSession() {
	return (
		<div className='w-full h-2/3 flex justify-center lg:px-3'>
			<div className='w-full h-full bg-slate-100 flex lg:w-3/4'>
				<div className='hidden lg:w-1/2 lg:flex'>
					<Image
						src='image-default.svg'
						alt='default image'
						width={0}
						height={0}
						className='w-full h-full bg-contain'
					/>
				</div>

				<div className='w-full lg:w-1/2'>
					<p>textos</p>
				</div>
			</div>
		</div>
	);
}
