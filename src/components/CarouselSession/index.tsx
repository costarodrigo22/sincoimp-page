import Carousel from '../Carousel';
import NavBar from '../NavBar';
import 'swiper/css';

export default async function CarouselSession() {
	const response = await fetch(
		'http://192.168.0.191:7008/api/without/carrossel/index'
	);

	const images = await response.json();

	return (
		<section className='w-full h-3/4 flex flex-col items-center'>
			<NavBar />

			<Carousel imageDetails={images.data} />
		</section>
	);
}
