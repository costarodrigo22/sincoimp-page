
export default async function useCarouselController() {

  const response = await fetch(
    'http://192.168.0.191:7008/api/without/carrossel/index',
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    }
  );

  const images = await response.json();

  return { images }
}
