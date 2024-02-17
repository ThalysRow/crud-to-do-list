import connection from "knex";

export const knex = connection({
  client: "pg",
  connection: {
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.NAME_DB,
  },
});
