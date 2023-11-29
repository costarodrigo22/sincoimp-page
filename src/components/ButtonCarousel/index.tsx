'use client';

import { ComponentProps } from 'react';
import { useSwiper } from 'swiper/react';

interface ButtonCarouselProps extends ComponentProps<'div'> {
	label: string;
	direction: 'prev' | 'next';
}

export default function ButtonCarousel({
	label,
	direction,
	...props
}: ButtonCarouselProps) {
	const swiper = useSwiper();

	return (
		<div
			{...props}
			onClick={() =>
				direction === 'next' ? swiper.slideNext() : swiper.slidePrev()
			}
		>
			<span>{label}</span>
		</div>
	);
}
