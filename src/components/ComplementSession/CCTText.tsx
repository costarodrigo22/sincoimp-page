import Image from 'next/image';
import React from 'react';
import ArrowIcon from '../Images/ArrowIcon';

interface ICCTText {
  text: string;
}

export default function CCTText({ text }: ICCTText) {
  return (
    <div className="flex gap-2 items-center">
      <ArrowIcon className="text-primary-1" />
      <span>{text}</span>
    </div>
  );
}
