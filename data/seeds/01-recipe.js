
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').insert([
    {recipe: 'Cereal'},
    {recipe: 'Toast'},
    {recipe: 'Scrambled Eggs'},
  ]);
};