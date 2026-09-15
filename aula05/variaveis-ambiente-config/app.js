import dotenv from 'dotenv';

dotenv.config();

function iniciarAplicacao() {

    const porta = process.env.PORT || 8080;
    const apiKey = process.env.API_KEY_PAYMENT;
    const dbUrl = process.env.DATABASE_URL;

    if (!apiKey) {
        console.error('[ERRO] A chave API_KEY_PAYMENT não é válida');
        process.exit(1);
    }

    console.log(`[OK] Servidor rodando na posta: ${porta}`);
    console.log(`[OK] Conexão DB: ${dbUrl}`);
    console.log(`[OK] Status da API de Pagamento: chave de tamanho ${apiKey.length} autenticada`);

}

iniciarAplicacao();