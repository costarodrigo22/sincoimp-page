'use client';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Data } from './conventionTypes';
import { ClipLoader } from 'react-spinners';
import ConventionCarousel from './components/ConventionsCarousel';

export default function ConventionsSession() {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleGetData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://comerciariosdeimperatriz.com.br/api/without/convencao/index',
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    handleGetData();
  }, []);

  return (
    <>
      <div
        className="w-full bg-cover bg-center bg-no-repeat mt-20 h-auto pb-32"
        style={{ backgroundImage: 'url("conventions-bg.svg")' }}
        id="conventionsSection"
      >
        <div className="flex flex-col gap-3 pt-20 justify-start mt-20 max-w-[1152px] pl-8 ">
          <Image
            alt="gradiente"
            src={'/topgradient-conventions.svg'}
            height={9}
            width={91}
          />
          <h2 className="font-medium text-xl md:text-2xl lg:text-[40px] lead-[60px]">
            Convenções coletivas
          </h2>
          <span className="font-normal text-sm md:text-base lg:text-xl leading-[30px]">
            A convenção coletiva de trabalho (CCT) é um acordo obrigatório entre
            o sindicato dos trabalhadores e o sindicato patronal que estabelece
            regras e condições de trabalho para uma determinada categoria
            profissional.
          </span>
        </div>
        <div className="mt-24 w-full flex justify-center items-center gap-10">
          {isLoading ? (
            <ClipLoader loading={isLoading} color="#B50000" size={30} />
          ) : (
            data && <ConventionCarousel data={data.data} />
          )}
        </div>
      </div>
    </>
  );
}
