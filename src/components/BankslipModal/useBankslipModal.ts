import { formatCNPJ, unformatCNPJ } from "@/utils/FormatCnpj";
import { formatCurrency, unformatCurrency } from "@/utils/FormatCurency";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export interface BankslipModalProps {
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

export type FormData = z.infer<typeof schema>;

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

export default function useBankslipModal(setIsOpen: (isOpen: boolean) => void) {

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
        console.error('erro ao gerar boleto', error);
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
          setValue('companyName', data.data.nome_fantasia);
          setValue('email', data.data.email);
          setCompanyNotFound(false);
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
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
          console.error('erro ao buscar empresa', error);
        }
      }
    }
  

  return { register, handleSubmit, errors, handleGenerateBankslip, handleAmountChange, handleCnpjChange, loading, companyNotFound };
}
