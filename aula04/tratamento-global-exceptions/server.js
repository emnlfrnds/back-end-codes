import express from 'express';

const app = express();
app.use(express.json());

process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO] (uncaughtException):', err.message);
    process.exit(1);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PROMISE REJEITADA] (unhandledRejection):', reason);
    process.exit(1);
});

app.get('/', (req, res) => {
    res.json({ success: true, message: '[OI] Seja bem-vindo ao server!' })
})

app.get('/sucesso', (req, res) => {
    res.json({ success: true, message: '[OK] Operação Realizada com Sucesso.' });
});

app.get('/erro-sincrono', (req, res, next) => {
    try {
        throw new Error('[ERRO] Algo deu errado de propósito.');
    } catch (erro) {
        next(erro);
    }
})

app.get('/erro-assincrono', async (req, res, next) => {
    try {
        await Promise.reject(new Error('[ERRO] Ao consultar banco de dados externo.'))
    } catch (erro) {
        next(erro);
    }
})

app.use((req, res, next) => {
    const erro = new Error(`A rota ${req.originalUrl} não existe nesse servidor.`);
    erro.status = 404;

    next(erro);
});

app.use((err, req, res, next) => {
    console.error(`[ERRO NA ROTA]: ${err.stack}`);

    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: 'Erro interno no servidor',
        error: err.message
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});