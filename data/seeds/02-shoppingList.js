
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoppingList').insert([
    {recipe_id:1, ingredients_name: 'Coco Puffs', quantity: 1},
    {recipe_id:1, ingredients_name: 'Milk', quantity:1},

    {recipe_id:2, ingredients_name: 'Toast', quantity:1},
    {recipe_id:2, ingredients_name: 'Butter', quantity:1},

    {recipe_id:3, ingredients_name: 'Egg', quantity:1},
    {recipe_id:3, ingredients_name: 'Butter', quantity:1},

    
  ])
    
};
