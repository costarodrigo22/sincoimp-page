
export default async function useCarouselController() {

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

  return { images }
}
