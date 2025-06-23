import Image from 'next/image';
import BenefitItem from './BenefitItem';
import * as RadixIcons from '@radix-ui/react-icons';
import { httpClient } from '@/utils/httpClient';
import { useEnvStore } from '@/app/contexts/EnvContext';

type RadixIconNames = keyof typeof RadixIcons;

export default async function BenefitsSession() {
  const clientName = useEnvStore.getState().clientName;

  const imagePath = `/clients/${clientName}/image-benefits.svg`;

  let titleNdescription = null;
  let benefits = [];
  let error = null;

  try {
    const { data } = await httpClient.get(
      '/api/without/primeiro_informativo/index'
    );
    titleNdescription = data.data || [];
    benefits = data.data?.[0]?.categoria_primeiro_informativo || [];
  } catch (err) {
    error = 'Não foi possível carregar os benefícios.';
    console.error('Error fetching benefits:', err);
  }

  if (error) return <p>{error}</p>;

  return (
    <div
      id="benefitsSection"
      className="w-full h-[710px] flex justify-center lg:px-3 pb-1"
    >
      <div className="w-full h-[710px] flex gap-40">
        <div className="hidden h-[710px] lg:w-1/2 lg:flex">
          {titleNdescription?.[0]?.base64 && (
            <Image
              src={titleNdescription[0].base64}
              alt="default image"
              width={0}
              height={0}
              className="w-full h-full bg-contain"
            />
          )}
        </div>

        <div className="relative w-full h-[710px] flex flex-col pt-14">
          <Image
            src={imagePath}
            width={89}
            height={173}
            alt="Icon fake"
            className="absolute right-6 -top-0.5"
          />
          <div className="flex flex-col pl-8 lg:pl-0">
            {titleNdescription?.[0]?.titulo && (
              <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                {titleNdescription[0].titulo}
              </span>
            )}
            {titleNdescription?.[0]?.descricao && (
              <span className="">{titleNdescription[0].descricao}</span>
            )}
          </div>
          <div className="px-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mt-24 lg:px-0">
            {benefits.map(
              (item: {
                titulo: string;
                icone: RadixIconNames | null;
                id: string;
              }) => (
                <BenefitItem
                  key={item.id}
                  text={item.titulo}
                  icon={item.icone}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
