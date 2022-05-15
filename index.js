import fs from 'fs';
import chalk from 'chalk';

async function extraiLinks(texto) {

    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resultados = [];
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        resultados.push({ [temp[1]]: temp[2] })
    }
    if (resultados.length == 0) {
        console.log(chalk.blue("ALERT:"), chalk.yellow('No links found in the file.'));
        process.exit();
    }
    return resultados;
}

function trataErro(erro) {
    console.log(chalk.red("ERRO:"), chalk.red(erro.code), chalk.yellow("Invalid path or file not exist!"));
    process.exit(1);

}

async function pegaArquivo(caminho, encoding = "utf-8") {
    try {
        const data = await fs.promises.readFile(caminho, encoding);
        return data;
    } catch (erro) {
        trataErro(erro);
    }
}

async function markdown(caminho) {
    try {
        const texto = await pegaArquivo(caminho);
        const strTexto = String(texto);
        return await extraiLinks(strTexto);
    } catch (erro) {
        trataErro(erro);
    }

}

export default markdown;
