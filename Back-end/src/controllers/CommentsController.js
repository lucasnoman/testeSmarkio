const knex = require('../database');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex('comments');

      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { user_comments } = req.body;

      await knex('comments').insert({ id: uuidv4(), user_comments });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { user_comments } = req.body;
      const { id } = req.params;

      await knex('comments').update({ user_comments }).where({ id });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('comments').del().where({ id });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
