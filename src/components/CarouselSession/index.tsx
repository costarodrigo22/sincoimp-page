import Carousel from '../Carousel';
import NavBar from '../NavBar';
import 'swiper/css';

export default async function CarouselSession() {
  const response = await fetch(
    'https://comerciariosdeimperatriz.com.br/api/without/carrossel/index',
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const images = await response.json();
  return (
    <section className="relative w-full h-3/4 flex flex-col items-center">
      <NavBar />

      <Carousel imageDetails={images.data} />
    </section>
  );
}
