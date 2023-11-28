import Image from 'next/image';

export default function ActionsSession() {
	return (
		<div className='flex flex-col items-center w-full pt-8 pb-8 bg-white h-full lg:px-3 md:h-4/5 sm:h-screen'>
			<div className='flex flex-col w-full lg:w-4/5'>
				<span className='px-8 py-4 text-3xl font-medium lg:px-0'>
					Por que me sindicalizar?
				</span>

				<span className='px-8 lg:px-0'>
					Filie-se e participe das ações do Sincoimp.{' '}
					<strong>Trabalhador unido, categoria forte!</strong>
				</span>
			</div>

			<div className='grid grid-cols-1 w-full h-full gap-12 px-8 py-8 lg:w-4/5 lg:px-0 lg:flex lg:justify-center md:grid-cols-2'>
				<div className='w-full lg:h-3/4 flex justify-center flex-col p-9 bg-[#F3F3F3] rounded-3xl'>
					<Image src='icon-fake.svg' width={30} height={30} alt='Icon fake' />

					<strong className='mt-3 text-lg'>
						Locais de trabalho mais seguros
					</strong>

					<span className='text-sm mt-16'>
						A verdadeira qualidade de vida no trabalho éo resultado de uma
						atuação em todas as suas dimensões, abrangendo a a organização e a
						gestão, as relações entre os trabalhadores entre si e também com a
						gerência.
					</span>
				</div>

				<div className='w-full lg:h-3/4 flex justify-center flex-col p-9 bg-[#F3F3F3] rounded-3xl'>
					<Image src='icon-fake.svg' width={30} height={30} alt='Icon fake' />

					<strong className='mt-3 text-lg'>
						Locais de trabalho mais seguros
					</strong>

					<span className='text-sm mt-16'>
						A verdadeira qualidade de vida no trabalho éo resultado de uma
						atuação em todas as suas dimensões, abrangendo a a organização e a
						gestão, as relações entre os trabalhadores entre si e também com a
						gerência.
					</span>
				</div>

				<div className='w-full lg:h-3/4 flex justify-center flex-col p-9 bg-[#F3F3F3] rounded-3xl'>
					<Image src='icon-fake.svg' width={30} height={30} alt='Icon fake' />

					<strong className='mt-3 text-lg'>
						Locais de trabalho mais seguros
					</strong>

					<span className='text-sm mt-16'>
						A verdadeira qualidade de vida no trabalho éo resultado de uma
						atuação em todas as suas dimensões, abrangendo a a organização e a
						gestão, as relações entre os trabalhadores entre si e também com a
						gerência.
					</span>
				</div>
			</div>
		</div>
	);
}
