const { env, isDevEnv } = require('./env.config');

const entities = ['dist/**/*.entity.js'];
const migrations = ['dist/migrations/**/*.js'];

const envs = {
  cli: { migrationsDir: 'src/migrations' },
  database: env.DB_NAME,
  dropSchema: false,
  entities,
  host: env.DB_HOST,
  logging: true,
  migrations,
  password: env.DB_PASSWORD,
  port: +env.DB_PORT,
  synchronize: false,
  type: 'mysql',
  username: env.DB_USERNAME
};

if (isDevEnv) {
  envs.url = env.DATABASE_URL;
}

module.exports = envs;
