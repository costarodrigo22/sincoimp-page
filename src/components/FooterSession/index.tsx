import Image from 'next/image';

export default function FooterSession() {
	return (
		<div className='grid grid-cols-1 w-full pt-8 pb-8 rounded-t-[40px] gap-4 bg-black lg:px-24 text-white lg:flex md:grid-cols-2'>
			<div className='w-full px-8 flex flex-col justify-between py-3'>
				<div>
					<Image
						src='logo-white.svg'
						alt='Logo do sindicato'
						width={90}
						height={90}
					/>

					<span className='text-[#B7B7B7] text-xs'>
						Sindicato dos comerciarios de Imperatriz
					</span>
				</div>

				<div>
					<strong>Siga nossas redes sociais</strong>

					<div className='flex mt-4'>
						<Image
							className='mr-4'
							src='instagram.svg'
							alt='Logo do sindicato'
							width={30}
							height={30}
						/>
						<Image
							src='facebook.svg'
							alt='Logo do sindicato'
							width={30}
							height={30}
						/>
					</div>
				</div>
			</div>

			<div className='w-full px-8 flex flex-col justify-between py-3'>
				<div className='flex w-full justify-between'>
					<div className='flex flex-col gap-4'>
						<span>Institucional</span>
						<span>Sobre nós</span>
						<span>Compromisso</span>
					</div>

					<div className='flex flex-col gap-4'>
						<span>Serviços</span>
						<span>Boletos</span>
						<span>Filiação</span>
					</div>
				</div>

				<div className='flex justify-center mt-8'>
					<Image
						className='mr-4'
						src='brasil.svg'
						alt='Logo do sindicato'
						width={30}
						height={30}
					/>
					<Image
						className='mr-4'
						src='maranhao.svg'
						alt='Logo do sindicato'
						width={30}
						height={30}
					/>
					<Image
						src='imperatriz.svg'
						alt='Logo do sindicato'
						width={30}
						height={30}
					/>
				</div>
			</div>

			<div className='w-full px-8 py-3'>
				<strong>Sindicato</strong>

				<div className='flex flex-row items-center mb-4 mt-4'>
					<Image
						src='whatsApp.svg'
						alt='Logo do sindicato'
						width={30}
						height={30}
					/>

					<span className='text-sm ml-4'>(99) 9 8277 - 0199</span>
				</div>
				<div className='flex flex-row items-center mb-4'>
					<Image
						src='location.svg'
						alt='Logo do sindicato'
						width={30}
						height={30}
					/>

					<span className='text-sm ml-4'>
						Av Santa Teresa, N°85 - Centro, Imperatriz, Maranhão
					</span>
				</div>
				<div className='flex flex-row items-center'>
					<Image
						src='mesage.svg'
						alt='Logo do sindicato'
						width={30}
						height={30}
					/>

					<span className='text-sm ml-4'>
						comerciariosdeimperatriz@gmail.com
					</span>
				</div>
			</div>
		</div>
	);
}
