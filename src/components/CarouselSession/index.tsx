'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../Carousel';
import NavBar from '../NavBar';
import 'swiper/css';

const CarouselSession = () => {
  const [images, setImages] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'http://192.168.0.191:7008/api/without/carrossel/index',
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );
        setImages(response.data);
      } catch (error) {
        setError('Não foi possível carregar as imagens.');
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="relative w-full h-[230px] xl:h-[90%] lg:h-[600px] md:h-[450px] sm:h-[400px] flex flex-col items-center">
      <NavBar />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {images && images.data ? (
        <Carousel imageDetails={images.data} />
      ) : (
        !loading && !error && <p>Não há imagens para exibir.</p>
      )}
    </section>
  );
};

export default CarouselSession;
