import Image from 'next/image';
import ComplementCard from './ComplementCard';
import CCTText from './CCTText';

export default function ComplementSession() {
  return (
    <div className="flex w-full h-auto">
      <div className="md:w-3/4 md:pl-24 sm:pl-12">
        <div className="flex flex-col md:flex-row gap-24 mt-5 m-auto pl-3">
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

        <div className="w-full mt-16 text-lg mb-10 pl-3">
          <div className="flex items-end gap-3 ">
            <Image
              src="speaker.svg"
              width={35}
              height={31}
              alt="Speaker icon"
            />
            <strong className="font-semibold">Você sabia?</strong>
          </div>

          <div className="flex flex-col gap-2 mt-4 pl-3 text-xs sm:text-sm">
            <span>
              <span>A </span>
              <strong>CCT </strong>
              <span>do </span>
              <strong>SINCOIMP </strong>
              <span>garante a ausência do trabalhador em casos como:</span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-4 mb-4 pl-3">
            <div className="flex flex-col gap-6">
              {/* Substituindo o código repetido por CCTText */}
              <CCTText text="Dois dias por falecimento de cônjuge;" />
              <CCTText text="Dois dias por falecimento de pai ou mãe;" />
              <CCTText text="Três dias por nascimento de filho;" />
              <CCTText text="Cinco dias para casamento;" />
            </div>

            <div className="flex flex-col gap-6">
              <CCTText text="Um dia para doação de sangue voluntária;" />
              <CCTText text="Um dia por ano para acompanhamento escolar dos filhos;" />
              <CCTText text="Dois dias por internação de cônjuge ou filhos;" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/4 hidden md:flex items-end -mb-24 -z-40">
        <Image
          src="/human.png"
          width={350}
          height={350}
          alt="Human illustration"
        />
      </div>
    </div>
  );
}
