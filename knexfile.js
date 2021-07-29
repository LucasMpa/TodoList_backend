require("dotenv").config();

module.exports = {
  client: "postgres",
  connection: {
    host: "ec2-18-213-219-169.compute-1.amazonaws.com",
    port: 5432,
    database: "d6rc0c9k0rudok",
    user: "lglunjbxtrjivi",
    password:
      "a1025e8ed48db70fd880b488e61fc2f20c958865e723ef663f65898d63bdbb4d",
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
