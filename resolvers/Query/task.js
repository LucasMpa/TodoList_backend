const db = require("../../config/db");

module.exports = {
  tasks(_, args) {
    return db("tasks");
  },

  tasksByConclusion(_, { filter }) {
    if (!filter) return null;
    const { is_conclued } = filter;
    return db("tasks").where({ is_conclued: is_conclued });
  },
};
