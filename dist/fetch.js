import normalizarTransacao from "./normalizarAPI.js";
export default async function fetchData(callback) {
    const resp = await fetch('https://api.origamid.dev/json/transacoes.json');
    const jsonAPI = await resp.json();
    if (!jsonAPI)
        return;
    const json = jsonAPI.map(transacao => normalizarTransacao(transacao));
    callback(json);
}
//# sourceMappingURL=fetch.js.map