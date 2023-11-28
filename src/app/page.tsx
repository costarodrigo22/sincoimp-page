import BenefitsSession from '@/components/BenefitsSession';
import CarouselSession from '../components/CarouselSession';
import NoticeSession from '@/components/NoticeSession';
import ActionsSession from '@/components/ActionsSession';

export default function Home() {
	return (
		<div className='w-full h-screen'>
			<CarouselSession />
			<BenefitsSession />
			<NoticeSession />
			<ActionsSession />
		</div>
	);
}
