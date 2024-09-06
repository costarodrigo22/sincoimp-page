'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import ButtonNavigation from '../ButtonNavigation';
import BenefitItem from './BenefitItem';
import * as RadixIcons from '@radix-ui/react-icons';

type RadixIconNames = keyof typeof RadixIcons;

const BenefitsSession = () => {
  const [titleNdescription, setTitleNdescription] = useState<any>(null);
  const [benefits, setBenefits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get(
          'http://192.168.0.191:7008/api/without/primeiro_informativo/index',
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );
        const data = response.data;
        setTitleNdescription(data.data);
        setBenefits(data.data[0]?.categoria_primeiro_informativo || []);
      } catch (err) {
        setError('Não foi possível carregar os benefícios.');
        console.error('Error fetching benefits:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBenefits();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      id="benefitsSection"
      className="w-full h-auto flex justify-center lg:px-3"
    >
      <div className="w-full h-auto flex lg:w-4/5">
        <div className="hidden lg:w-1/2 lg:flex">
          {titleNdescription && (
            <Image
              src={titleNdescription[0]?.base64}
              alt="default image"
              width={0}
              height={0}
              className="w-full h-full bg-contain"
            />
          )}
        </div>

        <div className="relative w-full flex flex-col items-center pt-14 lg:w-1/2">
          <Image
            src="image-benefits.svg"
            width={77}
            height={0}
            alt="Icon fake"
            className="absolute right-0 -top-0.5"
          />
          <div className=" flex flex-col">
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
          {/* <div className="flex pl-8 w-full lg:pl-0 items-center justify-center">
            <ButtonNavigation label="Quero me Filiar" navigateTo="/" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSession;
