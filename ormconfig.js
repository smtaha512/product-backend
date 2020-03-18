const { env, isDevEnv } = require("./env.config");

console.log(process.env.NODE_ENV, process.env.DB_NAME);

const isDevEnv = process.env.NODE_ENV === "DEV";

const entities = [isDevEnv ? "src/**/*.entity.ts" : "dist/**/*.entity.js"];
const migrations = [
  isDevEnv ? "src/migrations/**/*.ts" : "dist/migrations/**/*.js"
];

const envs = {
  cli: { migrationsDir: "src/migrations" },
  database: env.DB_NAME,
  dropSchema: false,
  entities,
  host: env.DB_HOST,
  logging: true,
  migrations,
  password: env.DB_PASSWORD,
  port: +env.DB_PORT,
  synchronize: false,
  type: "mysql",
  username: env.DB_USERNAME
};

if (isDevEnv) {
  envs.url = env.DATABASE_URL;
}

module.exports = envs;
