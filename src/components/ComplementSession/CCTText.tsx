import Image from 'next/image';
import React from 'react';

interface ICCTText {
  text: string;
}

export default function CCTText({ text }: ICCTText) {
  return (
    <div className="flex gap-2 items-center">
      <Image src="arrow-icon.svg" width={20} height={20} alt="Arrow icon" />
      <span>{text}</span>
    </div>
  );
}
