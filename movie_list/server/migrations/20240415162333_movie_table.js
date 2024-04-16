/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movie_data', table => {
    table.increments('id');
    table.string('movie_title')
    table.string('director')
    table.integer('release_year')
    table.string('worldwide_gross')
    table.boolean('watched')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie_data')
};
