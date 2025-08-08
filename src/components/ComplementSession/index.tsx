import Image from 'next/image';
import ComplementCard from './ComplementCard';
import CCTText from './CCTText';
import { cn } from '@/utils/Cn';
import { useEnvStore } from '@/app/contexts/EnvContext';

export default function ComplementSession() {
  const sincoimpAbsenceItems: string[] = [
    '2 dias por falecimento de cônjuge;',
    '2 dias por falecimento de pai ou mãe;',
    '3 dias por nascimento de filho;',
    '5 dias para casamento;',
    '1 dia para doação de sangue voluntária;',
    '1 dia por ano para acompanhamento escolar dos filhos;',
    '2 dias por internação de cônjuge ou filhos;',
  ];
  const sincograAbsenceItems: string[] = [
    '2 dias por falecimento de cônjuge, ascendente, descendente etc;',
    '3 dias em virtude de casamento;',
    '5 dias por nascimento de filho;',
    '1 dia para doação de sangue voluntária;',
    '1 dia por ano para acompanhar filho de ate 12 anos em consulta;',
    '2 dias para acompanhar esposa/companheira no periodo da gravidez;',
  ];

  const clientName = useEnvStore.getState().clientName;
  const absenceItems =
    clientName === 'sincogra' ? sincograAbsenceItems : sincoimpAbsenceItems;
  const imagePath = `/clients/${clientName}/human.svg`;

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="w-full" id="doubtsSection">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-24 mt-5 m-auto">
          <ComplementCard />

          <div className="flex mt-2 flex-col items-center justify-center bg-[#F1F1F1] w-[350px] h-[330px] sm:w-[400px] sm:wh-[360px] rounded-3xl relative px-2">
            <div className="bg-[#CCDDF0] rounded-full w-24 h-24 flex items-center justify-center absolute -top-10 z-10">
              <Image
                src="question-icon.svg"
                width={20}
                height={20}
                alt="Question icon"
              />
            </div>

            <div className="flex flex-col items-center text-sm mt-14">
              {' '}
              <span>Foi afastado por motivos de saúde.</span>
              <strong>Como fica o pagamento do salário?</strong>
            </div>

            <div className="flex flex-col items-center text-sm mt-4">
              <strong className="text-center">
                Afastamento por 1 até 5 dias:
              </strong>
              <span className="text-[#5B5B5B]">
                O salário é pago pela empresa.
              </span>
            </div>

            <div className="flex flex-col items-center text-sm mt-4">
              <strong className="text-center">A partir do 16° dia:</strong>
              <span className="text-[#5B5B5B]">
                A previdência social assume o pagamento.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pl-5">
        <div className="w-full mt-16 text-lg mb-10 lg:pl-3" id="uKnowSection">
          <div className="flex items-end gap-3 ">
            <Image
              src="speaker.svg"
              width={35}
              height={31}
              alt="Speaker icon"
            />
            <strong className="font-semibold">Você sabia?</strong>
          </div>

          <div className="flex flex-col gap-2 mt-4 lg:pl-3 text-base sm:text-lg md:text-xl">
            <span>
              <span>A </span>
              <strong>CCT </strong>
              <span>do </span>
              <strong className="uppercase">{clientName} </strong>
              <span>garante a ausência do trabalhador em casos como:</span>
            </span>
          </div>
        </div>
        <div className="flex lg:pl-8 justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:pl-3 h-fit  gap-x-8 gap-y-6 pb-12 pr-4 lg:pr-0 lg:pb-0 ">
            {absenceItems.map((item) => (
              <CCTText key={item} text={item} />
            ))}
          </div>
          <div
            className={cn(
              'w-1/4 hidden lg:flex items-end -mb-12 -z-40',
              clientName === 'sincogra' ? ' lg:-mb-10 xl:-mb-16 ' : '-mb-24'
            )}
          >
            <Image
              src={imagePath}
              width={350}
              height={350}
              alt="Human illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
