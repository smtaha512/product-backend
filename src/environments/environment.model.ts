import { ConnectionOptions } from 'typeorm';

export interface Environment {
  database: ConnectionOptions;
  port: number | string;
}
