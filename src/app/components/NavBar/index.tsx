import Image from 'next/image';

export default function NavBar() {
	return (
		<nav className='flex flex-row justify-between bg-white w-3/4 rounded-b-3xl shadow-md p-8 '>
			<Image src='logo.svg' alt='Logo do sindicato' width={90} height={90} />

			<div>
				<span>testess</span>
				<span>testess</span>
			</div>

			<div>
				<span>testess</span>
				<span>testess</span>
			</div>
		</nav>
	);
}
