import { ConnectionOptions } from "typeorm";

export interface Environment {
  database: Partial<ConnectionOptions>;
  port: number | string;
}
