import Image from 'next/image';

export default function ComplementSession() {
	return (
		<div className='relative flex w-full pt-24'>
			<div className='w-3/4 pl-24'>
				<div className='flex gap-24'>
					<div className='flex flex-col items-center justify-center bg-[#F1F1F1] w-[350px] h-[330px] rounded-3xl relative px-2'>
						<div className='bg-[#CCDDF0] rounded-full w-24 h-24 flex items-center justify-center absolute -top-10'>
							<Image
								src='question-icon.svg'
								width={20}
								height={20}
								alt='Question icon'
							/>
						</div>

						<div className='flex flex-col items-center text-sm'>
							<span>O que é </span>
							<strong>Convenção Coletiva de Trabalho (CCT)?</strong>
						</div>

						<div className='flex items-center text-sm mt-4'>
							<span className='text-center text-[#5B5B5B]'>
								São conjuntos de regras na relação de trabalho negociadas entre
								os sindicatos laborais, que é a entidade que representa os
								trabalhadores e o sindicato patronal.
							</span>
						</div>
					</div>

					<div className='flex flex-col items-center justify-center bg-[#F1F1F1] w-[350px] h-[330px] rounded-3xl relative px-2'>
						<div className='bg-[#CCDDF0] rounded-full w-24 h-24 flex items-center justify-center absolute -top-10'>
							<Image
								src='question-icon.svg'
								width={20}
								height={20}
								alt='Question icon'
							/>
						</div>

						<div className='flex flex-col items-center text-sm'>
							<span>Foi afastado por motivos de saúde.</span>
							<strong>Como fica o pagamento do salário?</strong>
						</div>

						<div className='flex flex-col items-center text-sm mt-4'>
							<strong className='text-center'>
								Afastamento por 1 até 5 dias:
							</strong>

							<span className='text-[#5B5B5B]'>
								O salário é pago pela empresa.
							</span>
						</div>

						<div className='flex flex-col items-center text-sm mt-4'>
							<strong className='text-center'>A partir do 16° dia:</strong>

							<span className='text-[#5B5B5B]'>
								A previdência social assume o pagamento.
							</span>
						</div>
					</div>
				</div>

				<div className='w-full mt-16'>
					<div className='flex'>
						<Image
							src='speaker.svg'
							width={30}
							height={30}
							alt='Question icon'
						/>
						<strong>Você sabia?</strong>
					</div>

					<div className='flex gap-1 mt-4'>
						<span>A</span>
						<strong>CCT</strong>
						<span>do</span>
						<strong>SINCOIMP</strong>
						<span>garante a ausência do trabalhador em casos como:</span>
					</div>

					<div className='flex gap-24 mt-4 mb-4'>
						<div className='flex flex-col gap-6'>
							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>

							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>

							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>

							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>
						</div>

						<div className='flex flex-col gap-6'>
							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>
							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>
							<div className='flex gap-1 items-center'>
								<Image
									src='arrow-icon.svg'
									width={20}
									height={20}
									alt='Question icon'
								/>

								<span>Dois dias por falecimento de cônjuge;</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-1/4 flex items-end -mb-24 -z-40'>
				<Image src='/human.png' width={350} height={350} alt='Question icon' />
			</div>
		</div>
	);
}
