'use client';

import { useReportModal } from '@/app/contexts/ReportModal';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [openMenuResponsive, setOpenMenuResponsive] = useState(false);
  const [base64, setBase64] = useState<string>('');
  const { setOpenReportModal } = useReportModal();

  async function handleGetData() {
    try {
      const res = await axios.get(
        'https://comerciariosdeimperatriz.com.br/api/without/empresa/logo'
      );
      setBase64(res.data.data[0].base64);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetData();
  }, []);

  function handleMenuResponsive() {
    setOpenMenuResponsive(!openMenuResponsive);
  }

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="z-30 absolute hidden flex-row justify-between bg-white w-full rounded-b-3xl shadow-md px-8 py-6 md:flex lg:w-3/4">
        {base64 && (
          <img src={base64} alt="Logo do sindicato" width={90} height={90} />
        )}

        <div className="w-2/4 flex justify-between items-center text-sm font-medium">
          <div
            className=" p-2 rounded-[10px] hover:bg-slate-200 transition-colors cursor-pointer"
            onClick={() => handleScroll('benefitsSection')}
          >
            <a className="cursor-pointer font-medium">Benefícios</a>
          </div>
          <div
            className=" p-2 rounded-[10px] hover:bg-slate-200 transition-colors cursor-pointer"
            onClick={() => handleScroll('actionsSection')}
          >
            <a className="cursor-pointer font-medium">Ações</a>
          </div>
          <div
            className=" p-2 rounded-[10px] hover:bg-slate-200 transition-colors cursor-pointer"
            onClick={() => handleScroll('conventionsSection')}
          >
            <a className="cursor-pointer font-medium">Convenções</a>
          </div>
          <div
            className=" p-2 rounded-[10px] hover:bg-slate-200 transition-colors cursor-pointer"
            onClick={() => handleScroll('doubtsSection')}
          >
            <a className="cursor-pointer font-medium">Dúvidas</a>
          </div>

          {/* <div
            onClick={() => {
              setOpenReportModal(true);
            }}
            className="flex items-center p-3 w-40 justify-center border-2 border-black rounded-3xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
          >
            <Image
              width={20}
              height={20}
              src="report-icon.svg"
              alt="Ícone de denuncia"
              className="mr-2"
            />
            <span className="font-medium">Denuncie aqui</span>
          </div> */}
          {/* <span>Início</span>
					<span>Institucional</span>
					<span>Convenções</span>
					<span>Serviços</span> */}
        </div>

        <div
          onClick={() => {
            window.open('http://localhost:5173/', '_blank');
          }}
          className="flex items-center w-40 justify-center border-2 border-black rounded-3xl cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
        >
          <span className="font-medium">Emita seu boleto</span>
        </div>
      </nav>

      <nav className="flex flex-col w-full fixed md:hidden z-10">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="absolute top-4 left-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleMenuResponsive}
        >
          {openMenuResponsive && (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          )}
          {!openMenuResponsive && (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        {openMenuResponsive && (
          <div className="flex flex-col h-screen px-4 py-16 bg-slate-50 gap-6 w-[300px] shadow-lg">
            {/* <span className="cursor-pointer font-medium mt-4">Início</span>
            <span className="cursor-pointer font-medium">Institucional</span>
            <span className="cursor-pointer font-medium">Convenções</span>
            <span className="cursor-pointer font-medium">Serviços</span>
            <span className="cursor-pointer font-medium">Emita seu boleto</span> */}
            <a
              className="cursor-pointer font-medium"
              onClick={() => handleScroll('benefitsSection')}
            >
              Benefícios
            </a>
            <a
              className="cursor-pointer font-medium"
              onClick={() => handleScroll('actionsSection')}
            >
              Ações
            </a>
            <a
              className="cursor-pointer font-medium"
              onClick={() => handleScroll('doubtsSection')}
            >
              Dúvidas
            </a>
            <a
              className="cursor-pointer font-medium"
              onClick={() => handleScroll('conventionsSection')}
            >
              Convenções
            </a>
            <a
              className="cursor-pointer font-medium"
              onClick={() => handleScroll('uKnowSection')}
            >
              Você sabia?
            </a>
          </div>
        )}
      </nav>
      <div className=" fixed bottom-5 z-40 right-5">
        <div
          className=" bg-[#007bff] rounded-full p-3 cursor-pointer text-lg shadow-md shadow-[rgba(0, 0, 0, 0.1)]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            width={30}
            height={30}
            src="arrow-upIcon.svg"
            alt="Voltar para o topo"
          />
        </div>
      </div>
    </>
  );
}
