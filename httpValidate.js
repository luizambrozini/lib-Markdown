import fetch from "node-fetch";

function trataErroHttp(erro) {
    throw new Error(erro.message)
}

async function checUrlStatus(urls) {

    try {
        const listStatus = await Promise
            .all(urls
                .map(async (url) => {
                    const response = await fetch(url)
                    return response.status;
                })
            )

        return listStatus;
    } catch (erro) {
        trataErroHttp(erro);
    }
}

function geraUrlArray(urls) {
    return urls.map(url => Object.values(url).join());
}

async function httpValidate(urls) {
    const links = geraUrlArray(urls);
    const linkStatus = await checUrlStatus(links);
    const resultado = urls.map((objeto, indice) => ({ ...objeto, status: linkStatus[indice] }));
    return resultado;
}

export default httpValidate
