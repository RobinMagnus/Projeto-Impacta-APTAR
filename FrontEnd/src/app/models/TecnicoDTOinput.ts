import {Endereco} from "./endereco";

export interface TecnicoDTOinput {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  endereco: Endereco;
  perfis?: number[]; // Certifique-se de que isso corresponde ao esperado pelo backend
  dataCriacao?: string; // Certifique-se de que isso corresponde ao esperado pelo backend
  cpf: string;
}


