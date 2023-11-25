import BenefitsSession from '@/components/BenefitsSession';
import CarouselSession from '../components/CarouselSession';

export default function Home() {
	return (
		<div className='w-full h-screen'>
			<CarouselSession />
			<BenefitsSession />
		</div>
	);
}
