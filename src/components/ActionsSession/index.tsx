import ActionCard from './ActionCard';
import * as RadixIcons from '@radix-ui/react-icons';
import { httpClient } from '@/utils/httpClient';
import { useEnvStore } from '@/app/contexts/EnvContext';

type RadixIconNames = keyof typeof RadixIcons;

export default async function ActionsSession() {
  // Buscar dados com axios
  let titleNdescription;
  let benefits;

  try {
    const { data } = await httpClient.get(
      '/api/without/segundo_informativo/index'
    );

    titleNdescription = data.data;
    benefits = data.data[0]?.categoria_segundo_informativo;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }

  const theme = useEnvStore.getState().clientName;
  const imagePath = `/clients/${theme}/backdrop-image-whyjoin.svg`;
  const imagePath2 = `/clients/${theme}/image-back-whyjoin.svg`;

  return (
    <div
      id="actionsSection"
      className="flex flex-col items-center w-full h-auto mb-8 lg:px-10 py-12"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex p-4 md:p-12 items-center justify-center flex-col rounded-3xl w-full"
        style={{
          backgroundImage: `url(${imagePath2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 30,
        }}
      >
        <div className="flex flex-col w-full 2xl:pl-28 xl:pl-12 lg:pl-4 pl-0">
          {titleNdescription && (
            <span className="px-2 py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium lg:px-0">
              {titleNdescription[0].titulo}
            </span>
          )}
          {titleNdescription && (
            <span className="px-2 lg:px-0 text-sm sm:text-md">
              {titleNdescription[0].descricao}
            </span>
          )}
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full gap-4 justify-center lg:justify-around py-8 items-center">
          {benefits &&
            benefits.map(
              (item: {
                id: string;
                titulo: string;
                texto: string;
                icone: RadixIconNames | null;
              }) => (
                <ActionCard
                  key={item.id}
                  text={item.texto}
                  title={item.titulo}
                  icon={item.icone}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}
