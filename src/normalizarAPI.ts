import moedaParaNumero from "./moedaParaNumero.js";
import stringParaData from "./stringParaData.js";

declare global {
  interface vendaAPI {
    Status : string;
    ID : string;
    Data: string;
    Nome: string;
    'Forma de Pagamento' : string;
    Email: string;
    "Valor (R$)" : string;
    "Cliente Novo": number;
  }

  interface Venda {
    status: string;
    id: string;
    data: Date;
    nome: string;
    formaDePagamento : string;
    email: string;
    moeda : string;
    valor: number | null;
    clienteNovo: boolean;
  }

  interface semana {
    [key:string] : number;
  }

  interface estatisticas {
    total: number;
    cartaoDeCredito: number;
    boleto: number;
    paga: number;
    recusada: number;
    aguardando: number;
    estornada: number;
    semana: semana;
    diaMaisVendas: string;
  }
}

export default function normalizarTransacao(venda: vendaAPI): Venda {
  return {
    status: venda.Status,
    id: venda.ID,
    data: stringParaData(venda.Data),
    nome: venda.Nome,
    formaDePagamento : venda['Forma de Pagamento'],
    email: venda.Email,
    moeda : venda['Valor (R$)'],
    valor: moedaParaNumero(venda['Valor (R$)']),
    clienteNovo: Boolean(venda["Cliente Novo"])
  }
}