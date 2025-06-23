import * as RadixIcons from '@radix-ui/react-icons';

type RadixIconNames = keyof typeof RadixIcons;

export const IconDisplay: React.FC<{ selectedIcon: RadixIconNames | null }> = ({
  selectedIcon,
}) => {
  const IconComponent = selectedIcon ? RadixIcons[selectedIcon] : null;

  return (
    <div>
      {IconComponent && (
        <IconComponent width={24} height={24} className="text-primary-1" />
      )}
    </div>
  );
};
