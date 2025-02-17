declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      HTTP_SERVER_PORT: number;
      DB_TYPE: 'postgres' | 'mysql' | 'sqlite';
      DB_NAME: string;
      DB_USER: string;
      DB_PASS: string;
      DB_HOST: string;
      DB_PORT: number;
      MIGRATIONS_TABLE_NAME: string
    }
  }
}

export {};
