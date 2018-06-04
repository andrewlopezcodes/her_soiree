
exports.up = function(knex, Promise) {
  return knex.schema.createTable('her_soiree', table => {
    table.increments();
    table.string('title', 128);
    table.string('organizer_name', 128);
    table.string('organizer_website_url');
    table.string('event_type', 64);
    table.string('event_topic', 64);
    table.text('description');
    table.string('venue_name', 64);
    table.string('street_address', 128);
    table.string('city', 64);
    table.string('state', 2);
    table.string('zipcode', 10);
    table.string('participant_age', 20);
    table.timestamp('event_start_time');
    table.timestamp('event_finish_time');
    table.string('event_frequency', 20);
    table.string('dress_code', 64);
    table.float('event_price', 9, 2);
    table.text('event_flyer_url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('her_soiree');
};
