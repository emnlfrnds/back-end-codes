import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url';
import { formatLog } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarLogSystem(mensagemLog) {
    try {
        const pastaLog = path.join(__dirname, 'logs');
        const arquivoLog = path.join(pastaLog, 'system.log');

        await fs.mkdir(pastaLog, { recursive: true});

        const registroLog = formatLog(mensagemLog);

        await fs.appendFile(arquivoLog, registroLog, 'utf-8');

        console.log('Log registrado com sucesso!');
    } catch (erro) {
        console.error('Erro ao registrar log:', erro);
    }
}

salvarLogSystem('Inicialização do servidor concluída!\n');
salvarLogSystem('Conexão com o bando de dados estabelecida!\n');