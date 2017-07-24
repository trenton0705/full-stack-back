
exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", (games) => {
    games.increments()
    games.string("name")
    games.string("publisher")
    games.integer("release")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("games")
};
