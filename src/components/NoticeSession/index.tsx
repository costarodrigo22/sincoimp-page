export default function NoticeSession() {
	return (
		<div className='flex flex-col items-center w-full pt-8 bg-slate-100 h-full lg:px-3 md:h-4/5 sm:h-full'>
			<div className='flex w-full relative lg:w-4/5'>
				<div className='left-8 w-16 h-2 absolute bg-red-700 rounded-lg lg:left-0'></div>
				<span className='px-8 py-4 text-3xl font-medium lg:px-0'>
					Fique ligado nas últimas <strong className=''>notícias</strong>
				</span>
			</div>

			<div className='grid grid-cols-1 w-full h-full gap-12 px-8 py-8 lg:w-4/5 lg:px-0 lg:flex lg:justify-center md:grid-cols-2'>
				<div
					className='w-full bg-cover bg-center bg-no-repeat lg:w-1/3 rounded-3xl'
					style={{ backgroundImage: 'url("image.png")' }}
				></div>

				<div
					className='w-full bg-cover bg-center bg-no-repeat lg:w-1/3 rounded-3xl'
					style={{ backgroundImage: 'url("image.png")' }}
				></div>

				<div
					className='w-full bg-cover bg-center bg-no-repeat lg:w-1/3 rounded-3xl'
					style={{ backgroundImage: 'url("image.png")' }}
				></div>
			</div>

			<div>
				<span>sdsdsdsd</span>
			</div>
		</div>
	);
}
