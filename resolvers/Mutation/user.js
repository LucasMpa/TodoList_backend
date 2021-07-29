const db = require("../../config/db");

const mutations = {
  async newUser(_, { data }) {
    try {
      const [id] = await db("users").insert(data);
      return db("users").where({ id }).first();
    } catch (e) {
      throw new Error(e);
    }
  },
  async editUser(_, { filter, data }) {
    try {
      let user;
      if (!filter) return null;
      const { id } = filter;
      if (id) {
        user = await db("users").where({ id }).first();
      }
      if (user) {
        const { id } = user;
        await db("users").where({ id }).update(data);
      }
      return { ...data };
    } catch (e) {
      throw new Error(e);
    }
  },
};

module.exports = mutations;
