import { Environment } from "./environment.model";

const typeormEnvs = require("../../ormconfig");
const { env } = require("../../env.config");

export const environment: Environment = {
  database: {
    ...typeormEnvs,
    migrationsRun: true,
    logging: false,
    dropSchema: !true
  },
  port: env.port || 3000
};
