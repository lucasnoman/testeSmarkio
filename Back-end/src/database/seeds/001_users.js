const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: uuidv4(), username: 'lucascalhau' },
        { id: uuidv4(), username: 'lucasnoman' },
        { id: uuidv4(), username: 'lucascalhaunoman' },
      ]);
    });
};
