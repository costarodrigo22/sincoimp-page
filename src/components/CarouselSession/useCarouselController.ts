import { httpClient } from '@/utils/httpClient';
import axios from 'axios';


export default async function useCarouselController() {
  const { data } = await httpClient.get(
    '/api/without/carrossel/index',
  );

  const images = data;

  return { images };
}
