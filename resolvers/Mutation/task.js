const db = require("../../config/db");

module.exports = {
  async newTask(_, { data }) {
    try {
      const [id] = await db("tasks").insert(data);
      return db("tasks").where({ id }).first();
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },

  async editTask(_, { filter, data }) {
    try {
      let task;
      if (!filter) return null;
      const { id } = filter;
      if (id) {
        task = await db("tasks").where({ id }).first();
      }
      if (task) {
        const { id } = task;
        await db("tasks").where({ id }).update(data);
      }
      return { ...data };
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },

  async removeTask(_, { filter }) {
    try {
      let task;
      if (!filter) return null;
      const { id } = filter;
      if (id) {
        task = await db("tasks").where({ id }).first();
      }
      if (task) {
        const { id } = task;
        await db("tasks").where({ id }).delete();
      }
      return task;
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },

  async conclusionToggle(_, { filter, data }) {
    try {
      let task;
      if (!filter) return null;
      const { id } = filter;
      if (id) {
        task = await db("tasks").where({ id }).first();
      }
      if (task) {
        const { id } = task;
        await db("tasks").where({ id }).update(data);
      }
      return { ...data };
    } catch (e) {
      throw new Error(e.sqlMessage);
    }
  },
};
