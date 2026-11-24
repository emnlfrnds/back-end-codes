import { registerAs } from '@nestjs/config';
import Joi from 'joi';
import { ValidateEnv } from './validate-env.config.js';

export default registerAs('database', () => {
  // uri: process.env.MONGO_URI || 'mongodb://localhost:27017/escola_db',
  // maxPoolSize: parseInt(process.env.MONGO_MAX_POOL_SIZE || '10', 10),

  const schema = Joi.object({
    MONGO_URI: Joi.string().uri().required(),
    MONGO_MAX_POOL_SIZE: Joi.number().default(10),
  });

  const env = ValidateEnv(process.env, schema);

  return {
    uri: env.MONGO_URI,
    maxPoolSize: env.MONGO_MAX_POOL_SIZE,
  };
});
