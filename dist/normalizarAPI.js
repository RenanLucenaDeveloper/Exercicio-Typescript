import moedaParaNumero from "./moedaParaNumero.js";
import stringParaData from "./stringParaData.js";
export default function normalizarTransacao(venda) {
    return {
        status: venda.Status,
        id: venda.ID,
        data: stringParaData(venda.Data),
        nome: venda.Nome,
        formaDePagamento: venda['Forma de Pagamento'],
        email: venda.Email,
        moeda: venda['Valor (R$)'],
        valor: moedaParaNumero(venda['Valor (R$)']),
        clienteNovo: Boolean(venda["Cliente Novo"])
    };
}
//# sourceMappingURL=normalizarAPI.js.map