import BenefitsSession from '@/components/BenefitsSession';
import CarouselSession from '../components/CarouselSession';
import NoticeSession from '@/components/NoticeSession';
import ActionsSession from '@/components/ActionsSession';
import FooterSession from '@/components/FooterSession';
import ComplementSession from '@/components/ComplementSession';
import { Toaster } from 'react-hot-toast';

export default function Home() {
	return (
		<div className='w-full h-screen'>
			<Toaster position='top-right' reverseOrder={false} />
			<CarouselSession />
			<BenefitsSession />
			{/* <NoticeSession /> */}
			<ActionsSession />
			<ComplementSession />
			<FooterSession />
		</div>
	);
}
