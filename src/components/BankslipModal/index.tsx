import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { BeatLoader } from 'react-spinners';
import useBankslipModal, { BankslipModalProps } from './useBankslipModal';

export default function BankslipModal({
  isOpen,
  setIsOpen,
}: BankslipModalProps) {
  const {
    handleSubmit,
    companyNotFound,
    errors,
    handleAmountChange,
    handleCnpjChange,
    handleGenerateBankslip,
    loading,
    register,
  } = useBankslipModal(setIsOpen);

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
                  maxLength={18}
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
