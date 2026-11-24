export interface variaveisAmbiente {
  NODE_ENV: 'desenvolvimento' | 'producao' | 'test';
  PORT: number;
  MONGO_URI: string;
  JWT_SECRET: string;
}
