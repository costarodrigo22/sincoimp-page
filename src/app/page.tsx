import BenefitsSession from '@/components/BenefitsSession';
import CarouselSession from '../components/CarouselSession';
import NoticeSession from '@/components/NoticeSession';
import ActionsSession from '@/components/ActionsSession';
import FooterSession from '@/components/FooterSession';

export default function Home() {
	return (
		<div className='w-full h-screen'>
			<CarouselSession />
			<BenefitsSession />
			<NoticeSession />
			<ActionsSession />
			<FooterSession />
		</div>
	);
}
