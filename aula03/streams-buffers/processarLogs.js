import fs from 'fs'
import readline from 'readline';

async function filtrarErros() {

    console.log('[OK] Processando com Streams...\n')

    exibirConsumoMemoria('[START]');

    const streamLeitura = fs.createReadStream('servidor.log')
    const streamEscrita = fs.createWriteStream('apenas_erros.log')
    const leitorLinhaaLinha = readline.createInterface({input:streamLeitura, crlfDelay: Infinity})

    let totalErros = 0;

    for await (const linha of leitorLinhaaLinha) {
        if (linha.includes('ERROR')) {
            streamEscrita.write(linha + '\n');
            totalErros++;
        }
    }

    exibirConsumoMemoria('[END]')
    console.log('[OK] Processamento concluído\n')
    console.log(`[OK] Quantidade de Erros: ${totalErros}\n`)
}

async function filtrarInfos() {

    console.log('[OK] Processando com Streams...\n')
    
    exibirConsumoMemoria('[START]');

    const streamLeitura = fs.createReadStream('servidor.log');
    const streamEscrita = fs.createWriteStream('apenas_infos.log');
    const leitorLinhaaLinha = readline.createInterface({input:streamLeitura, crlfDelay: Infinity});

    let totalInfos = 0;

    for await (const linha of leitorLinhaaLinha) {
        if (linha.includes('INFO')) {
            streamEscrita.write(linha + '\n');
            totalInfos++;
        }
    }

    exibirConsumoMemoria('[END]')
    console.log('[OK] Processamento concluído\n')
    console.log(`[OK] Quantidade de Infos: ${totalInfos}\n`)
}

function exibirConsumoMemoria(consumo) {
    const memoria = process.memoryUsage();
    const rssMB = (memoria.rss / 1024 / 1024).toFixed(2);
    const heapMB = (memoria.heapUsed / 1024 / 1024).toFixed(2);

    console.log(`${consumo} RSS: ${rssMB} MB | Heap Utilizado: ${heapMB} MB\n`);
}

filtrarErros();
filtrarInfos();