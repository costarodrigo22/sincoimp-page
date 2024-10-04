import { ReactNode, ComponentProps } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

interface ModalProps extends ComponentProps<'div'> {
  isOpen: boolean;
  title: string;
  description: string;
  children: ReactNode;
  onClose?: () => void;
}

export default function Modal({
  isOpen,
  title,
  description,
  children,
  onClose,
  ...props
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <div {...props}>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20 animate-overlayShow z-50" />
          <Dialog.Content
            className="fixed z-[500] top-1/2 left-1/2 w-full max-w-[750px] max-h-[85vh] overflow-y-auto focus:outline-none bg-white rounded-lg p-6 transform -translate-x-1/2 -translate-y-1/2 animate-contentShow"
            style={{ ...props.style }}
          >
            <header className="flex justify-between items-center mb-5">
              <Dialog.Title>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-[#343434] text-lg">
                    {title}
                  </span>
                  <span className="text-[#343434]">{description}</span>
                </div>
              </Dialog.Title>
              <Image
                src={'/close-icon.svg'}
                alt="ícone para fechar"
                width={20}
                height={20}
                className="cursor-pointer mb-auto"
                onClick={onClose}
              />
            </header>
            <div>{children}</div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
