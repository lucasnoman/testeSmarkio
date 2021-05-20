const knex = require('../database');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async index(req, res, next) {
    try {
      // caso não haja mais páginas, o padrão vai ser 1
      const { user_id, page = 1 } = req.query;

      const query = knex('projects')
        .limit(5)
        .offset((page - 1) * 5);

      const countObject = knex('projects').count();

      if (user_id) {
        query
          .select('projects.id', 'title', 'user_id', 'username')
          .where({ user_id })
          .where('deleted_at', null)
          .join('users', 'users.id', '=', 'projects.user_id');

        countObject.where({ user_id });
      }

      const [count] = await countObject;
      res.header('X-Total-Count', count['count(*)']);

      const results = await query;

      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { title, user_id } = req.body;

      await knex('projects').insert({
        id: uuidv4(),
        title,
        user_id,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
