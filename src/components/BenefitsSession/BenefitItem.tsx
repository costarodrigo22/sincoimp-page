import Image from 'next/image';
import React from 'react';

interface IBenefitItem {
  text: string;
}

export default function BenefitItem({ text }: IBenefitItem) {
  return (
    <div className="flex items-center mb-10">
      <div className="bg-[#B500001A] w-12 h-12 rounded-full flex items-center justify-center">
        <Image src="icon-fake.svg" width={20} height={20} alt="Icon fake" />
      </div>

      <p className="ml-4 text-sm sm:text-xs md:text-sm lg:text-[12px]">
        {text}
      </p>
    </div>
  );
}
