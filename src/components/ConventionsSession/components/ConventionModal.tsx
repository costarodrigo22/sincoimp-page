'use client';
import Modal from '@/app/layouts/Modal';
import { Convencao } from '../conventionTypes';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

interface ConventionModalProps {
  isModalOpen: boolean;
  handleModalToggle: () => void;
  item: Convencao;
}

export default function ConventionModal({
  isModalOpen,
  handleModalToggle,
  item,
}: ConventionModalProps) {
  const [loadingFiles, setLoadingFiles] = useState<{ [key: string]: boolean }>(
    {}
  );

  async function handleGetFile(FileId: string) {
    setLoadingFiles((prev) => ({ ...prev, [FileId]: true }));

    const body = {
      id: FileId,
    };
    try {
      const res = await axios.post(
        'https://comerciariosdeimperatriz.com.br/api/without/anexo_convencao/view_file',
        body,
        {
          responseType: 'blob',
        }
      );
      console.log(res);
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFiles((prev) => ({ ...prev, [FileId]: false }));
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      title={item.titulo}
      description={item.descricao}
      onClose={handleModalToggle}
    >
      <div>
        <div className="flex gap-1 border-b-2 pb-1 border-black">
          <Image
            alt="Imagem de arquivo"
            width={20}
            height={20}
            src={'/arquive-icon.svg'}
          />
          <span className="text-[#343434]">Arquivos</span>
        </div>
        {item.anexo_convencao.length > 0 ? (
          item.anexo_convencao.map((anexo) => (
            <div
              key={anexo.id}
              className="py-[13px] border-b border-black flex items-center justify-between"
            >
              <span
                onClick={() => handleGetFile(anexo.id)}
                className="text-[#0066FF] hover:underline cursor-pointer ml-3 text-sm font-medium"
              >
                {anexo.nome_arquivo}
              </span>
              <div
                onClick={() => handleGetFile(anexo.id)}
                className="cursor-pointer rounded-full mr-3 h-8 w-8 hover:bg-slate-200 transition-colors duration-300 flex justify-center items-center"
              >
                {loadingFiles[anexo.id] ? (
                  <ClipLoader
                    loading={loadingFiles[anexo.id]}
                    color="#B50000"
                    size={25}
                  />
                ) : (
                  <Image
                    alt="Abrir arquivo em uma nova aba"
                    src={'/eye-icon.svg'}
                    height={14}
                    width={19}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-40">
            <Image
              alt="Não foi encontrada nenhuma convenção"
              src={'/no-itens-found.svg'}
              width={350}
              height={100}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
