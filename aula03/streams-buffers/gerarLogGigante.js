import fs from 'fs'

const streamEscrita = fs.createWriteStream('servidor.log')
console.log('[OK] Gerando arquivo de log simulado...');

for (let i = 0; i < 10e4; i++) {
    const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';
    streamEscrita.write(`Linha ${i}: Status 200 - Mensagem simulada ${tipo}\n`);
}

streamEscrita.end();