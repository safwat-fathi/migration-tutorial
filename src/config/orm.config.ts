
import { DataSource, DataSourceOptions } from 'typeorm';
import {config} from 'dotenv'

config()

const dbConfig: DataSourceOptions = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: process.env.MIGRATIONS_TABLE_NAME,
  migrationsRun: true,
	synchronize: false
};

const dataSource = new DataSource(dbConfig);

export default dataSource