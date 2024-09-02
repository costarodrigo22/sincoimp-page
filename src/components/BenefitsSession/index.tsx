import Image from 'next/image';
import ButtonNavigation from '../ButtonNavigation';
import BenefitItem from './BenefitItem';
import { Key } from 'react';
import * as RadixIcons from '@radix-ui/react-icons';

type RadixIconNames = keyof typeof RadixIcons;

export default async function BenefitsSession() {
  const response = await fetch(
    'https://comerciariosdeimperatriz.com.br/api/without/primeiro_informativo/index',
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const responsejsoned = await response.json();
  const titleNdescription = responsejsoned.data;
  const benefits = responsejsoned?.data[0]?.categoria_primeiro_informativo;

  return (
    <div className="w-full h-auto flex justify-center lg:px-3">
      <div className="w-full h-auto flex lg:w-4/5">
        <div className="hidden lg:w-1/2 lg:flex">
          {titleNdescription && (
            <Image
              src={titleNdescription[0].base64}
              alt="default image"
              width={0}
              height={0}
              className="w-full h-full bg-contain"
            />
          )}
        </div>

        <div className="relative w-full flex flex-col items-center pt-8 lg:w-1/2">
          <Image
            src="backdrop-image.svg"
            width={77}
            height={180}
            alt="Icon fake"
            className="absolute right-0 -top-0.5"
          />
          {titleNdescription && (
            <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl px-8 sm:px-0">
              {titleNdescription[0].titulo}
            </span>
          )}
          {titleNdescription && (
            <span className="px-8 sm:px-0">
              {titleNdescription[0].descricao}
            </span>
          )}
          <div className="px-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 lg:px-0">
            {benefits &&
              benefits.map(
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
          <div className="flex pl-8 w-full lg:pl-0 items-center justify-center">
            <ButtonNavigation label="Quero me Filiar" navigateTo="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
