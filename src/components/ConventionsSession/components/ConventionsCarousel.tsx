'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ConventionItem from './ConventionItem';
import { Convencao, Data } from '../conventionTypes';
import { useState } from 'react';
import ConventionModal from './ConventionModal';
import ButtonCarousel from '@/components/ButtonCarousel';

export default function ConventionCarousel({ data }: Data) {
  const [item, setItem] = useState<Convencao>({} as Convencao);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(item: Convencao) {
    setItem(item);
    setIsModalOpen(true);
    console.log(item);
  }

  return (
    <>
      <ConventionModal
        isModalOpen={isModalOpen}
        item={item}
        handleModalToggle={() => setIsModalOpen(false)}
      />
      <div className="w-full h-auto">
        <Swiper
          pagination={{ clickable: true }}
          className="h-[350px]"
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        >
          <ButtonCarousel
            direction="prev"
            label="<"
            className="absolute top-[40%] left-0 md:left-6 w-16 h-16 z-30 flex text-3xl items-center justify-center rounded-full transition-colors hover:bg-black/10 cursor-pointer"
          />
          {data.map((item) => (
            <SwiperSlide
              style={{
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={item.id}
            >
              <ConventionItem
                onClick={() => handleOpenModal(item)}
                item={item}
              />
            </SwiperSlide>
          ))}
          <ButtonCarousel
            direction="next"
            label=">"
            className="absolute top-[40%] right-0 md:right-6 w-16 h-16 z-30 text-3xl flex items-center justify-center rounded-full transition-colors hover:bg-black/10 cursor-pointer"
          />
        </Swiper>
      </div>
    </>
  );
}
