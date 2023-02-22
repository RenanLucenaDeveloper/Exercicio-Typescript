import fetchData from "./fetch.js";
const dadosSection = document.getElementById('dados');
if (dadosSection instanceof HTMLElement) {
    fetchData(adicionarDados);
}
function adicionarDados(dados) {
    const dadosTable = document.getElementById('dados-table');
    if (!dadosTable)
        return;
    dados.map((venda) => {
        dadosTable.innerHTML += `
      <tr>
        <td>${venda.nome}</td>
        <td>${venda.email}</td>
        <td>R$ ${venda.moeda}</td>
        <td>${venda.formaDePagamento}</td>
        <td>${venda.status}</td>
      </tr>
    `;
    });
}
export default dadosSection;
//# sourceMappingURL=dados.js.map