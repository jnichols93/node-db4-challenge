
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe_name: 'Cereal'},
    {recipe_name: 'Toast'},
    {recipe_name: 'Scrambled Eggs'},
  ]);
};