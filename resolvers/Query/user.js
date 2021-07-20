const db = require("../../config/db");

module.exports = {
  users(_, args) {
    return db("users");
  },

  user(_, { filter }) {
    if (!filter) return null;
    const { id, email } = filter;
    if (id) {
      return db("users").where({ id }).first();
    }
    if (email) {
      return db("users").where({ email }).first();
    }
  },
};
