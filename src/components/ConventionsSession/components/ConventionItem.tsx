import Image from 'next/image';
import React from 'react';
import { Convencao } from '../conventionTypes';

interface ConventionItemProps extends React.HTMLProps<HTMLDivElement> {
  item: Convencao;
}

export default function ConventionItem({ item, ...rest }: ConventionItemProps) {
  return (
    <div
      {...rest}
      className="bg-white hover:cursor-pointer h-[280px] w-[292px] rounded-[30px] shadow-md flex justify-center items-center flex-col gap-6 group/convencao"
    >
      <Image
        alt="Arquivo de conveção"
        src={'/arquive-image.svg'}
        width={68}
        height={149}
      />
      <div className="flex flex-col mx-6 gap-2">
        <p className="font-semibold text-base group-hover/convencao:underline transition-all duration-300 ease-in-out text-[#343434]">
          {item.titulo}
        </p>
        <div className="flex gap-[10px] items-center">
          <p className=" group-hover/convencao:underline transition-all duration-300 ease-in-out text-[#343434]">
            {item.descricao}
          </p>
          <Image
            src={'/arrow-diagonal-red.svg'}
            alt="Abrir convenção"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
}
