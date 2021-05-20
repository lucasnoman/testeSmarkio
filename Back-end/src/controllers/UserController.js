const knex = require('../database');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex('users').where('deleted_at', null);

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { username } = req.body; // usar essa desestruturação prevê erros de req.body

      await knex('users').insert({ id: uuidv4(), username });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { username } = req.body;
      const { id } = req.params;

      await knex('users').update({ username }).where({ id }); // mesmo que {id: id}

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('users')
        // .del() // hard delete
        .update('deleted_at', new Date()) // soft delete
        .where({ id });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
