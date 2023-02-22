import fetchData from "./fetch.js";
const estatisticasSection = document.getElementById('estatisticas');
if (estatisticasSection instanceof HTMLElement) {
    fetchData(calcularDados);
}
function filtrarValor(venda) {
    return venda.valor !== null;
}
function calcularDados(json) {
    const estatisticas = {
        total: 0,
        cartaoDeCredito: 0,
        boleto: 0,
        paga: 0,
        recusada: 0,
        aguardando: 0,
        estornada: 0,
        semana: {
            ['Segunda-feira']: 0,
            ['terça-feira']: 0,
            ['quarta-feira']: 0,
            ['quinta-feira']: 0,
            ['sexta-feira']: 0,
            ['sábado']: 0,
            ['domingo']: 0,
        },
        diaMaisVendas: '',
    };
    const totalArray = json.filter(filtrarValor).forEach(venda => estatisticas.total += venda.valor);
    json.forEach((item) => {
        switch (item.formaDePagamento) {
            case 'Cartão de Crédito':
                estatisticas.cartaoDeCredito += 1;
                break;
            case 'Boleto':
                estatisticas.boleto += 1;
                break;
        }
        switch (item.status) {
            case 'Paga':
                estatisticas.paga += 1;
                break;
            case 'Aguardando pagamento':
                estatisticas.aguardando += 1;
                break;
            case 'Recusada pela operadora de cartão':
                estatisticas.recusada += 1;
                break;
            case 'Estornada':
                estatisticas.estornada += 1;
                break;
        }
        switch (item.data.getDay()) {
            case (0):
                estatisticas.semana['domingo'] += 1;
                break;
            case (1):
                estatisticas.semana['Segunda-feira'] += 1;
                break;
            case (2):
                estatisticas.semana['terça-feira'] += 1;
                break;
            case (3):
                estatisticas.semana['quarta-feira'] += 1;
                break;
            case (4):
                estatisticas.semana['quinta-feira'] += 1;
                break;
            case (5):
                estatisticas.semana['sexta-feira'] += 1;
                break;
            case (6):
                estatisticas.semana['sábado'] += 1;
                break;
        }
    });
    AdicionarEstatisticas(estatisticas);
}
function AdicionarEstatisticas(estatisticas) {
    if (estatisticasSection) {
        estatisticasSection.innerHTML += `
    <div class="total">
      <p>Total: ${estatisticas.total.toLocaleString('Pt-br', { style: 'currency', currency: 'BRL' })}</p>
    </div>

    <div class="metodo">
      <p>Cartão de Crédito: ${estatisticas.cartaoDeCredito}</p>
      <p>Boleto: ${estatisticas.boleto}</p>
    </div>

    <div class="status">
      <p>Pagas: ${estatisticas.paga}</p>
      <p>Recusadas pela operadora: ${estatisticas.recusada}</p>
      <p>Aguardando Pagamento: ${estatisticas.aguardando}</p>
      <p>Vendas estornadas: ${estatisticas.estornada}</p>
      <p>Dia com mais vendas: ${Object.entries(estatisticas.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0][0]}</p>
    </div>
    `;
    }
}
//# sourceMappingURL=estatisticas.js.map