interface ArrowIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function ArrowIcon({
  size = 20,
  color = 'currentColor',
  className = '',
}: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={(size * 18) / 20}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 11.0012L9 11.0012C4.58172 11.0012 1 7.4195 1 3.00122L1 1.00122M19 11.0012L13 5.00122M19 11.0012L13 17.0012"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
