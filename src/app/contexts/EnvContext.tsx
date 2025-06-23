import { create } from 'zustand';

interface EnvState {
  pageTitle: string;
  pageDescription: string;
  clientName: string;
  setPageTitle: (title: string) => void;
  setPageDescription: (description: string) => void;
  setClientName: (name: string) => void;
}

export const useEnvStore = create<EnvState>((set) => ({
  pageTitle: '',
  pageDescription: '',
  clientName: '',
  setPageTitle: (title) => set({ pageTitle: title }),
  setPageDescription: (description) => set({ pageDescription: description }),
  setClientName: (name) => set({ clientName: name }),
}));
