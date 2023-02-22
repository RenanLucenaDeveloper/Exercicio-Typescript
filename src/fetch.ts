import normalizarTransacao from "./normalizarAPI.js";

export default async function fetchData(callback : Function) {
  const resp = await fetch('https://api.origamid.dev/json/transacoes.json');
  const jsonAPI : vendaAPI[] = await resp.json();

  if(!jsonAPI) return;
  const json = jsonAPI.map(transacao => normalizarTransacao(transacao));
  callback(json);
}
