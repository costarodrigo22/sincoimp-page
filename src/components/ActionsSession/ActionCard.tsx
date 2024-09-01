import Image from 'next/image';
import React from 'react';

interface IActionCard {
  title: string;
  text: string;
}

export default function ActionCard({ title, text }: IActionCard) {
  return (
    <div className="w-full h-[350px] lg:h-auto flex justify-center flex-col p-5 sm:p-7 md:p-8 lg:p-9 bg-[#F3F3F3] rounded-2xl">
      <Image src="icon-fake.svg" width={30} height={30} alt="Icon fake" />
      <strong className="mt-3 pt-6 text-base lg:text-base sm:text-lg">
        {title}
      </strong>
      <span className="text-xs sm:text-sm mt-8">{text}</span>
    </div>
  );
}
