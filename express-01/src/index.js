import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, Turma!!!');
});

// Inicialização do servidor apenas fora do ambiente serverless da Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log('Olá, Turma!!!');
    console.log('MY_SECRET =', process.env.MY_SECRET);
  });
}

export default app;