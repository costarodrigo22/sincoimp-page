'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonCarousel from '../ButtonCarousel';
import 'swiper/css';

interface CarouselProps {
  imageDetails: {
    id: string;
    titulo: string;
    descricao: string;
    imagem: string;
    base64: string;
    associado_id: string;
    created_at: string;
    updated_at: string;
  }[];
}

export default function Carousel({ imageDetails }: CarouselProps) {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className="w-full h-full">
      <ButtonCarousel
        direction="prev"
        label="<"
        className="absolute top-1/2 left-6 w-16 h-16 z-30 flex text-3xl items-center justify-center rounded-full transition-colors hover:bg-black/10 cursor-pointer"
      />
      {imageDetails.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${item.base64})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </SwiperSlide>
      ))}
      <ButtonCarousel
        direction="next"
        label=">"
        className="absolute top-1/2 right-6 w-16 h-16 z-30 text-3xl flex items-center justify-center rounded-full transition-colors hover:bg-black/10 cursor-pointer"
      />
    </Swiper>
  );
}
