
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('recipe_name', 128)
                .unique()
                .notNullable();
        })
        .createTable('shoppingList', tbl => {
            tbl.increments();
            tbl.text('ingredients_name', 128)
                .notNullable();
            tbl.integer('quantity', 128)
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned() //non negative number
                .notNullable() // no null values
                .references('id') //reference the specific id number
                .inTable('recipes')
                .onUpdate('CASCADE')//
                .onDelete('CASCADE')
                
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('step_number', 128)
                .notNullable();
            tbl.text('instructions')
                .notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id') //reference the specific id number
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('shoppingList')
        .dropTableIfExists('instructions')

};