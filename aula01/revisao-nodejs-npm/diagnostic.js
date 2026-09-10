const os = require('os');

const plataforma = os.platform();
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);
const cpu = os.cpus();

console.log('=== Diagnóstico do Servidor ===');


console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória RAM Total: ${memoriaTotal} GB`);
console.log(`Memória RAM Livre: ${memoriaLivre} GB`);
console.log(`Cores da CPU: ${cpu.length}`);
console.log(`Processador: ${cpu[0].model}`);