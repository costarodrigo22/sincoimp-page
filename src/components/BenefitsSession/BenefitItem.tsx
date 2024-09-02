import Image from 'next/image';
import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';
import { IconDisplay } from './BenefitIcon';

type RadixIconNames = keyof typeof RadixIcons;
interface IBenefitItem {
  text: string;
  icon: RadixIconNames | null;
}

export default function BenefitItem({ text, icon }: IBenefitItem) {
  return (
    <div className="flex items-center mb-10">
      <div className="bg-[#B500001A] w-12 h-12 rounded-full flex items-center justify-center">
        <IconDisplay selectedIcon={icon} />
      </div>

      <p className="ml-4 text-sm sm:text-xs md:text-sm lg:text-[12px]">
        {text}
      </p>
    </div>
  );
}
