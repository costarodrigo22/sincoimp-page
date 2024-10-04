export interface AnexoConvencao {
  id: string;
  nome_arquivo: string;
  url: string; // A string no formato de JSON
  convencao_id: string;
  created_at: string; // Usando string para data
  updated_at?: string; // A propriedade pode estar ausente
}

export interface Convencao {
  id: string;
  titulo: string;
  descricao: string;
  created_at: string;
  updated_at: string;
  anexo_convencao: AnexoConvencao[];
}

export interface Data {
  data: Convencao[];
}