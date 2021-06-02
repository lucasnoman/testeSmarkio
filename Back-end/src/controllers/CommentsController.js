const knex = require("../database");
const { v4: uuidv4 } = require("uuid");

const synthesize = require("../service/textToSpeech");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex("comments");

      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { user_comments } = req.body;
      const id = uuidv4();

      const userInputData = {
        id: id,
        user_comments,
        audio_path: `../audio/${id}`,
      };

      setTimeout(() => {
        synthesize(id, user_comments);
      }, 1);

      await knex("comments").insert(userInputData);

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { user_comments } = req.body;
      const { id } = req.params;

      await knex("comments").update({ user_comments }).where({ id });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("comments").del().where({ id });

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
