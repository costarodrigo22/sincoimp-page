import Image from 'next/image';

export default function NavBar() {
	return (
		<nav className='flex flex-row justify-between bg-white w-3/4 rounded-b-3xl shadow-md px-8 py-6'>
			<Image src='logo.svg' alt='Logo do sindicato' width={90} height={90} />

			<div className='w-2/4 flex justify-between items-center text-sm'>
				<span>Início</span>
				<span>Institucional</span>
				<span>Convenções</span>
				<span>Serviços</span>
			</div>

			<div>
				<span>testess</span>
			</div>
		</nav>
	);
}
