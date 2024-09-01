import React from 'react';

interface INoticeCard {
  text: string;
  publishedAt: string;
}

export default function NoticeCard({ text, publishedAt }: INoticeCard) {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat lg:w-1/3 rounded-3xl h-[450px]"
      style={{ backgroundImage: 'url("image.png")' }}
    >
      <div className="flex flex-col justify-between bg-black bg-opacity-50 rounded-3xl w-full h-full">
        <span className="mt-14 ml-6 text-xl sm:text-base md:text-lg text-white font-semibold opacity-100">
          {text}{' '}
        </span>

        <span className="mb-6 ml-6 text-[#E7DD00] text-sm opacity-100">
          {publishedAt}{' '}
        </span>
      </div>
    </div>
  );
}
