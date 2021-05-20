const { v4: uuidv4 } = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: uuidv4(),
          title: 'rowValue1',
          user_id: '36950a06-7883-459e-ad66-8f7ef4960191',
        },
        {
          id: uuidv4(),
          title: 'rowValue2',
          user_id: 'c8262b33-971d-4228-bfc2-1d813edabe44',
        },
        {
          id: uuidv4(),
          title: 'rowValue3',
          user_id: 'da42afce-c6f8-4205-b6a1-9679720ad612',
        },
      ]);
    });
};
