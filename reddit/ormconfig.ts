module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "test123",
  database: process.env.NODE_ENV === "development" ? "readit" : "readit",
  synchronize: false,
  logging: false,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"],
  seeds: ["src/seeds/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "src/subscribers",
  },
};
