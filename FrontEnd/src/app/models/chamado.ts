import {Endereco} from "./endereco";


export interface Chamados {
    id: number;
    numeroChamado: string;
    status: number;
    titulo: string;
    observacoes: string;
    endereco: Endereco;
    tecnico: string;
    empresa: string;
}