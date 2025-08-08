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
    <div className="flex items-center mb-5 md:mb-12">
      <div className="min-w-[3rem] min-h-[3rem] rounded-full flex items-center justify-center bg-primary-1/10">
        <IconDisplay selectedIcon={icon} />
      </div>

      <p className="ml-4 text-sm sm:text-base">{text}</p>
    </div>
  );
}
