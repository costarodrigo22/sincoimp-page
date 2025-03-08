import { formatCurrency, unformatCurrency } from '@/utils/FormatCurency';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatCNPJ, unformatCNPJ } from '@/utils/FormatCnpj';
import axios from 'axios';
import toast from 'react-hot-toast';

interface BankslipModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const schema = z.object({
  cnpj: z.string().min(1, 'CPF/CNPJ é obrigatório'),
  companyName: z.string().min(1, 'Nome da empresa é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório'),
  amount: z.string().min(1, 'Valor é obrigatório'),
  dueDate: z.string().min(1, 'Vencimento é obrigatório'),
});

type FormData = z.infer<typeof schema>;

export interface CompanyRes {
  data: {
    id: string;
    razao_social: string;
    nome_fantasia: string;
    cnpj: string;
    inscricao_estadual: string;
    quantidade_funcionario: number;
    email: string;
    telefone: string | null;
    celular_1: string;
    celular_2: string | null;
    celular_3: string | null;
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    referencia: string;
    data_criacao: string;
    created_at: string;
    updated_at: string;
    url_logo: string | null;
  };
}

export default function BankslipModal({
  isOpen,
  setIsOpen,
}: BankslipModalProps) {
  const [loading, setLoading] = useState(false);
  const [companyNotFound, setCompanyNotFound] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function handleGenerateBankslip(data: FormData) {
    const dueDate = new Date(data.dueDate);
    const monthYear = dueDate.toLocaleString('default', {
      month: 'numeric',
      year: 'numeric',
    });

    const body = {
      due_date: data.dueDate,
      email: data.email,
      items: [
        {
          description: `Boleto gerado pela empresa ${
            data.companyName
          } - CNPJ: ${
            data.cnpj
          } no dia ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()} referente a data ${monthYear} `,
          price_cents: Number(unformatCurrency(data.amount)),
          quantity: 1,
        },
      ],
      payer: {
        cpf_cnpj: unformatCNPJ(data.cnpj),
        name: data.companyName,
      },
    };
    try {
      setLoading(true);
      const { data } = await axios.post(
        'https://comerciariosdeimperatriz.com.br/api/without/boleto/criar',
        body
      );
      reset();
      setLoading(false);
      setIsOpen(false);
      toast.success('Boleto gerado com sucesso');
      window.open(data.secure_url, '_blank');
    } catch (error) {
      console.log('erro ao gerar boleto', error);
    }
  }

  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    const formattedValue = formatCurrency(event.target.value);
    setValue('amount', formattedValue);
  }
  async function handleCnpjChange(event: React.ChangeEvent<HTMLInputElement>) {
    const formattedValue = formatCNPJ(event.target.value);
    setValue('cnpj', formattedValue);
    if (formattedValue.length === 18) {
      try {
        const { data } = await axios.post<CompanyRes>(
          'https://comerciariosdeimperatriz.com.br/api/without/empresa_conveniada/find_empresa',
          { cnpj: unformatCNPJ(formattedValue) }
        );
        console.log(data.data);

        setValue('companyName', data.data.nome_fantasia);
        setValue('email', data.data.email);
        setCompanyNotFound(false);
      } catch (error) {
        if (error.status === 404) {
          toast.error('Empresa não encontrada na base de dados');
          reset({
            cnpj: formattedValue,
            companyName: '',
            email: '',
            amount: '',
            dueDate: '',
          });
          setCompanyNotFound(true);
        }
        console.log('erro ao buscar empresa', error);
      }
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 flex h-md:h-screen h-md:overflow-y-auto items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <Dialog.Panel className="bg-white p-6 h-md:h-screen h-md:overflow-y-auto rounded-lg shadow-lg z-50 flex flex-col w-[650px]">
        <form onSubmit={handleSubmit(handleGenerateBankslip)}>
          <div className="w-full flex items-end justify-end">
            <Image
              src="close-icon.svg"
              alt="Fechar modal"
              width={15}
              height={15}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div>gerar boleto</div>

          <div className="mt-5">
            <span>Informações gerais</span>
            <div className="h-[0.5px] w-full bg-slate-400 mb-2"></div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <input
                {...register('cnpj')}
                className="w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#090909] outline-none text-[14px]"
                placeholder="CNPJ"
                onChange={handleCnpjChange}
              />
              {errors.cnpj && (
                <p className="text-red-500 text-sm">{errors.cnpj.message}</p>
              )}
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-2 w-full">
                <input
                  {...register('companyName')}
                  className="w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#090909] outline-none text-[14px]"
                  placeholder="Nome da empresa"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  {...register('email')}
                  className="w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#090909] outline-none text-[14px]"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3">
            <span>Informações do boleto</span>
            <div className="h-[0.5px] w-full bg-slate-400 mb-3"></div>
          </div>
          <div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-2 w-full">
                <input
                  {...register('amount')}
                  className="w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#090909] outline-none text-[14px]"
                  placeholder="Valor"
                  onChange={handleAmountChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' || e.key === 'Delete') {
                      e.preventDefault();
                      const inputElement = e.target as HTMLInputElement;
                      inputElement.value = '';
                    }
                  }}
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm">
                    {errors.amount.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <input
                  {...register('dueDate')}
                  className="w-full p-2 border-[1px] border-opacity-20 border-[#000] mt-4 rounded-md text-[#090909] outline-none text-[14px]"
                  placeholder="Vencimento"
                  type="date"
                />
                {errors.dueDate && (
                  <p className="text-red-500 text-sm">
                    {errors.dueDate.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {companyNotFound && (
            <div>
              <span className="text-red-500 text-sm">
                Para gerar um boleto, é necessário que a empresa esteja
                cadastrada, entre em contato com o Sindicato para normalizar a
                situação.
              </span>
            </div>
          )}

          <div className="w-full flex items-end justify-end mt-4">
            <button
              type="submit"
              disabled={companyNotFound || loading}
              className="flex bg-[#0066FF] items-center justify-center px-5 py-2 rounded-md min-w-[100px] min-h-[30px] disabled:bg-[#ccc]"
            >
              {loading && <BeatLoader color="#fff" size={6} />}
              {!loading && (
                <span className="text-[#fff] ml-2 text-sm">Gerar +</span>
              )}
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}
