import Image from 'next/image';
import Link from 'next/link';
import ButtonNavigation from '../ButtonNavigation';
import BenefitItem from './BenefitItem';

export default function BenefitsSession() {
  return (
    <div className="w-full h-auto flex justify-center lg:px-3">
      <div className="w-full h-auto flex lg:w-4/5">
        <div className="hidden lg:w-1/2 lg:flex">
          <Image
            src="image-default.svg"
            alt="default image"
            width={0}
            height={0}
            className="w-full h-full bg-contain"
          />
        </div>

        <div className="relative w-full flex flex-col items-center pt-8 lg:w-1/2">
          <Image
            src="backdrop-image.svg"
            width={77}
            height={180}
            alt="Icon fake"
            className="absolute right-0 -top-0.5"
          />
          <span className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl px-8 sm:px-0">
            Por que fialiar-se ao <strong>sincoimp?</strong>
          </span>
          <span className="px-8 sm:px-0">
            Tenha seus direitos garantidos além de diversos beneficios.
          </span>
          <div className="px-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mt-10 lg:px-0">
            <BenefitItem text="Consultas juridícas" />
            <BenefitItem text="Descontos em estabelecimentos de ensino" />
            <BenefitItem text="Descontos em laboratórios" />
            <BenefitItem text="Atendimento odontológico" />
            <BenefitItem text="Descontos em farmâcias" />
            <BenefitItem text="Descontos em lojas de departamentos" />
          </div>
          <div className="flex pl-8 w-full lg:pl-0 items-center justify-center">
            <ButtonNavigation label="Quero me Filiar" navigateTo="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
