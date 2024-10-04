import Image from 'next/image';
import ActionCard from './ActionCard';
import axios from 'axios';
import * as RadixIcons from '@radix-ui/react-icons';

type RadixIconNames = keyof typeof RadixIcons;

export default async function ActionsSession() {
  // Buscar dados com axios
  let titleNdescription;
  let benefits;

  try {
    const response = await axios.get(
      'https://comerciariosdeimperatriz.com.br/api/without/segundo_informativo/index',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    titleNdescription = response.data.data;
    benefits = response.data.data[0]?.categoria_segundo_informativo;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    // Lidar com o erro de maneira apropriada
  }

  return (
    <div
      id="actionsSection"
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
          {titleNdescription && (
            <span className="px-8 py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium lg:px-0">
              {titleNdescription[0].titulo}
            </span>
          )}
          {titleNdescription && (
            <span className="px-8 lg:px-0 text-sm sm:text-md">
              {titleNdescription[0].descricao}
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 w-full h-full gap-12 px-8 py-8 lg:w-4/5 lg:px-0 lg:flex lg:justify-center md:grid-cols-2">
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
                  icone={item.icone}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}
