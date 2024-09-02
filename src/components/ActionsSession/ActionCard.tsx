import Image from 'next/image';
import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';
import { IconDisplay } from '../BenefitsSession/BenefitIcon';

type RadixIconNames = keyof typeof RadixIcons;

interface IActionCard {
  title: string;
  text: string;
  icone: RadixIconNames | null;
}

export default function ActionCard({ title, text, icone }: IActionCard) {
  return (
    <div className="w-full h-[350px] lg:h-auto flex justify-center flex-col p-5 sm:p-7 md:p-8 lg:p-9 bg-[#F3F3F3] rounded-2xl">
      <IconDisplay selectedIcon={icone} />
      <strong className="mt-3 pt-6 text-base lg:text-base sm:text-lg">
        {title}
      </strong>
      <span className="text-xs sm:text-sm mt-8">{text}</span>
    </div>
  );
}
