import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';
import { IconDisplay } from '../BenefitsSession/BenefitIcon';

type RadixIconNames = keyof typeof RadixIcons;

interface IActionCardProps {
  title: string;
  text: string;
  icon: RadixIconNames | null;
}

export default function ActionCard({ title, text, icon }: IActionCardProps) {
  return (
    <div className="flex h-[270px] md:h-[300px] lg:h-400px max-w-[360px] flex-col rounded-2xl bg-primary-3 p-5 sm:p-7 md:p-5">
      <IconDisplay selectedIcon={icon} />
      <strong className="mt-3 pt-2 text-base sm:text-lg">{title}</strong>
      <div className="mt-4 flex-1 min-h-0 overflow-y-auto">
        <p className="text-sm sm:text-sm text-secondary-7">{text}</p>
      </div>
    </div>
  );
}
