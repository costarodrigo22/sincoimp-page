import ButtonNavigation from '../ButtonNavigation';
import NoticeCard from './NoticeCard';

export default function NoticeSession() {
  return (
    <div className="flex flex-col items-center w-full pt-8 mt-8  bg-[#F3F3F3] h-auto lg:px-3 ">
      <div className="flex w-full relative lg:w-4/5">
        <div className="left-8 w-16 h-2 absolute bg-red-700 rounded-lg lg:left-0"></div>
        <span className="px-8 py-4 text-xl font-medium lg:px-0">
          Fique ligado nas últimas <strong className="">notícias</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 w-full h-full gap-12 px-8 py-8 lg:w-4/5 lg:px-0 lg:flex lg:justify-center md:grid-cols-2">
        <NoticeCard
          publishedAt="Publicado | 27 de ago"
          text="Aeroporto de Imperatriz ganha voos para São Paulo"
        />
        <NoticeCard
          publishedAt="Publicado | 27 de ago"
          text="Ministério Público promove debate sobre Proteção de Dados"
        />
        <NoticeCard
          publishedAt="Publicado | 27 de ago"
          text="Lojas funcionarão até as 20:00 no feriado"
        />
      </div>

      <div className="mt-12 pb-10">
        <ButtonNavigation label="Ver mais" navigateTo="/" />
      </div>
    </div>
  );
}
