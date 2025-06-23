import Image from 'next/image';
import { ClipLoader } from 'react-spinners';
import ConventionCarousel from './components/ConventionsCarousel';
import { Data } from './conventionTypes';
import { httpClient } from '@/utils/httpClient';
import { useEnvStore } from '@/app/contexts/EnvContext';

export default async function ConventionsSession() {
  const theme = useEnvStore.getState().clientName;
  const imagePath = `/clients/${theme}/conventions-bg.svg`;

  let data: Data | null = null;
  let error = null;

  try {
    const response = await httpClient.get('/api/without/convencao/index');
    data = response.data;
  } catch (err) {
    console.error('Erro ao buscar os dados:', err);
    error = 'Não foi possível carregar os dados.';
  }

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat h-auto pb-32"
      style={{ backgroundImage: `url(${imagePath})` }}
      id="conventionsSection"
    >
      <div className="flex flex-col gap-3 pt-20 justify-start max-w-[1152px] px-8 ">
        <div className="flex h-[9px]">
          <div className="w-12 h-[9px] bg-primary-1"></div>
          <div className="w-8 h-[9px] bg-secondary-1"></div>
          <div className="w-6 h-[9px] bg-secondary-2"></div>
        </div>
        <h2 className="font-medium text-xl md:text-2xl lg:text-[40px] leading-[60px]">
          Convenções coletivas
        </h2>
        <span className="font-normal text-sm md:text-base lg:text-xl leading-[30px]">
          A convenção coletiva de trabalho (CCT) é um acordo obrigatório entre o
          sindicato dos trabalhadores e o sindicato patronal que estabelece
          regras e condições de trabalho para uma determinada categoria
          profissional.
        </span>
      </div>

      <div className="mt-24 w-full flex justify-center items-center gap-10">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : data ? (
          <ConventionCarousel data={data.data} />
        ) : (
          <ClipLoader loading={true} className="text-primary-1" size={30} />
        )}
      </div>
    </div>
  );
}
