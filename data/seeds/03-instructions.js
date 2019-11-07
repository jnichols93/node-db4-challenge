
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
    {recipe_id: 1, step_number: 1, instructions:'pour cereal in a bowl' },
    {recipe_id: 1, step_number: 2, instructions:'pour milk over cereal and enjoy'},

    {recipe_id: 2, step_number: 1, instructions:'Throw some toast in a toaster' },
    {recipe_id: 2, step_number: 2, instructions:'Take that thang out and slap some butter on it and enjoy ' },

    {recipe_id: 3, step_number: 1, instructions:'Crack eggs in a bowl' },
    {recipe_id: 3, step_number: 2, instructions:'Scramble with a fork and cook' },
    {recipe_id: 3, step_number: 3, instructions:'Take the eggs out of the pan and enjoy' }
  ])
    
};