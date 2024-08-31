'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

export default function FooterSession() {
	const [openModal, setOpenModal] = useState(false);
	const [enterprise, setEnterprise] = useState('');
	const [description, setDescription] = useState('');
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);

	function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
	}

	async function handleSendReport() {
		setLoading(true);

		try {
			const formData = new FormData();

			if (file) {
				formData.append('files[]', file);
			}

			formData.append('nome_empresa', enterprise);
			formData.append('descricao', description);

			await axios.post(
				'http://192.168.0.191:7008/api/without/denuncia/full_store',
				formData
			);

			toast.success('Enviado com Sucesso!');
		} catch (error) {
			toast.error('Algo deu errado ao enviar sua denúncia!');
		} finally {
			setOpenModal(false);
			setLoading(false);
			setDescription('');
			setEnterprise('');
			setFile(null);
		}
	}

	return (
		<>
			<Dialog
				open={openModal}
				onClose={() => setOpenModal(false)}
				className='fixed inset-0 flex items-center justify-center z-50'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
			>
				<Dialog.Panel className='bg-white p-6 rounded-lg shadow-lg z-50 flex flex-col w-[570px]'>
					<div className='w-full flex items-end justify-end'>
						<Image
							src='close-icon.svg'
							alt='Logo do sindicato'
							width={15}
							height={15}
							className='cursor-pointer'
							onClick={() => setOpenModal(false)}
						/>
					</div>

					<strong className='text-[16px]'>
						Bem-vindo(a) ao nosso canal de denúncia
					</strong>

					<span className='text-[14px]'>
						Aqui você pode registrar denúncias contra empresas filiadas ao
						sindicato. Mas não se preocupe,
						<strong className='text-[14px] ml-1'>
							sua identidade será preservada.
						</strong>
					</span>

					<div className=''>
						<Image
							src='image-modal-report.svg'
							alt='image report icon'
							width={550}
							height={60}
						/>
					</div>

					<div className='flex items-center'>
						<Image
							src='warning-icon.svg'
							alt='warning report icon'
							width={20}
							height={20}
						/>

						<strong className='ml-2'>Importante!</strong>
					</div>

					<span className='text-[14px] mt-4'>
						Somente o sindicato terá acesso a sua denuncia!
					</span>

					<Image
						className='w-full -mt-4'
						src='line-modal-icon.svg'
						alt='warning report icon'
						width={0}
						height={0}
					/>

					<input
						value={enterprise}
						onChange={(event) => setEnterprise(event.target.value)}
						className='w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#909090] outline-none text-[14px]'
						placeholder='Nome da empresa'
					/>

					<textarea
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						className='w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#909090] outline-none text-[14px]'
						placeholder='Descrição da denúncia'
					/>

					<div className='flex w-full mt-4'>
						<label className='flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<Image
									src='attach-icon.svg'
									alt='anexar arquivo'
									width={10}
									height={10}
								/>
								<p className='mb-2 text-xs text-gray-500'>
									<span className='font-semibold'>Clique para carregar</span> ou
									arraste e solte
								</p>
								<p className='text-xs text-gray-500'>
									SVG, PNG, JPG or GIF (MAX. 800x400px)
								</p>
							</div>
							<input
								type='file'
								className='hidden'
								onChange={handleFileChange}
							/>
						</label>
					</div>

					<div className='w-full flex items-end justify-end mt-4'>
						<button
							disabled={loading}
							className='flex bg-[#0066FF] items-center justify-center px-6 py-3 rounded-md min-w-[100px] min-h-[30px]'
							onClick={handleSendReport}
						>
							{loading && <BeatLoader color='#fff' size={6} />}

							{!loading && (
								<>
									<Image
										src='save-icon.svg'
										alt='anexar arquivo'
										width={15}
										height={15}
									/>

									<span className='text-[#fff] ml-2 text-sm'>Enviar</span>
								</>
							)}
						</button>
					</div>
				</Dialog.Panel>
			</Dialog>

			<div className='grid grid-cols-1 w-full pt-8 pb-8 rounded-t-[40px] gap-4 bg-black lg:px-24 text-white lg:flex md:grid-cols-2 z-50'>
				<div className='w-full px-8 flex flex-col justify-between py-3 z-50'>
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

					<div className='mt-4'>
						<button
							onClick={() => setOpenModal(true)}
							className='
							flex items-center w-[200px] py-2 px-4 justify-center border-2 bg-white rounded-3xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out text-[12px] text-black font-bold
						'
						>
							<Image
								className='mr-2'
								src='report-icon.svg'
								alt='Icone de denuncia'
								width={20}
								height={20}
							/>

							<span>Denuncie aqui!</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
