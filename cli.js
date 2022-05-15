import markdown from './index.js';
import httpValidate from './httpValidate.js';
import chalk from 'chalk';

const caminho = process.argv[2];
const execute = process.argv[3];

async function processaTexto(caminho) {
    const resultado = await markdown(caminho);
    if (execute === 'check') {
        console.log(chalk.blue("Links States:"), await httpValidate(resultado));
    } else {
        console.log(chalk.blue("Links List:"), resultado);
    }
}

processaTexto(caminho);