import Image from 'next/image';
import ActionCard from './ActionCard';

export default function ActionsSession() {
  return (
    <div
      className="flex flex-col items-center w-full h-auto mb-8 lg:px-6 py-8"
      style={{
        backgroundImage: 'url("backdrop-image-whyjoin.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex items-center flex-col rounded-3xl"
        style={{
          backgroundImage: 'url("image-back-whyjoin.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 30,
          padding: 30,
        }}
      >
        <div className="flex flex-col w-full lg:w-4/5">
          <span className="px-8 py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium lg:px-0">
            Por que me sindicalizar?
          </span>

          <span className="px-8 lg:px-0 text-sm sm:text-md">
            Filie-se e participe das ações do Sincoimp.{' '}
            <strong>Trabalhador unido, categoria forte!</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 w-full h-full gap-12 px-8 py-8 lg:w-4/5 lg:px-0 lg:flex lg:justify-center md:grid-cols-2">
          <ActionCard
            title="Locais de trabalho mais seguros"
            text="A verdadeira qualidade de vida no trabalho é o resultado de uma atuação em todas as suas dimensões, abrangendo a a organização e a gestão, as relações entre os trabalhadores entre si e também com a gerência."
          />
          <ActionCard
            title="Diminuição na rotatividade de trabalhadores"
            text="Negociação de melhores condições de trabalho, salários e benefícios. Isso ajuda aumenta a satisfação e o engajamento dos funcionários, tornando-os menos propensos a deixar seus empregos"
          />
          <ActionCard
            title="Garantia do respeito aos direitos trabalhistas"
            text="Defesa dos acordos coletivos que asseguram condições de trabalho justas, salários adequados e benefícios. Controle da aplicação dessas normas e atuação para solução de conflitos e injustiças."
          />
        </div>
      </div>
    </div>
  );
}
