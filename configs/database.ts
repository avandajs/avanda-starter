import { dbConfig, Env } from "@avanda/app";
const config: dbConfig = {
  dbDialect: "mysql",
  dbName: Env.get<string>("DB_NAME", "test"),
  dbPassword: Env.get<string>("DB_PASSWORD", ""),
  dbUser: Env.get<string>("DB_USER", "root"),
  dbHost: Env.get<string>("DB_HOST", "localhost"),
};

export default config;
