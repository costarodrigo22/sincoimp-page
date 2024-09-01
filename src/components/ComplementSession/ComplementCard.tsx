import Image from 'next/image';

export default function ComplementCard() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-[350px] h-[330px] sm:w-[400px] sm:wh-[360px] rounded-3xl relative px-2 mt-2">
      <div className="bg-[#CCDDF0] rounded-full w-24 h-24 flex items-center justify-center absolute -top-10">
        <Image
          src="question-icon.svg"
          width={20}
          height={20}
          alt="Question icon"
        />
      </div>

      <div className="flex flex-col items-center text-sm">
        <span>O que é </span>
        <strong>Convenção Coletiva de Trabalho (CCT)?</strong>
      </div>

      <div className="flex items-center text-sm mt-4">
        <span className="text-center text-[#5B5B5B]">
          São conjuntos de regras na relação de trabalho negociadas entre os
          sindicatos laborais, que é a entidade que representa os trabalhadores
          e o sindicato patronal.
        </span>
      </div>
    </div>
  );
}
