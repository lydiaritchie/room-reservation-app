exports.up = function(knex) {
  return knex.schema.createTable('reservations', (table) => {
    // Primary Key
    table.increments('id').primary();

    // Event Details
    table.string('event_title').notNullable();
    table.string('event_description').nullable();

    // Date & Time (Separated)
    table.date('event_date').notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();

    // Room Relationship (Required)
    table.integer('room_id').unsigned().notNullable()
      .references('id').inTable('rooms');

    // User Relationship (Required)
    table.integer('user_id').unsigned().notNullable()
      .references('id').inTable('users');  // Single-line foreign key

    // Attendee Type
    table.enu('attendee_type', ['internal', 'external']).notNullable();

    // External Guest Fields (Conditional)
    table.string('guest_name').nullable();
    table.string('guest_email').nullable();
    table.string('guest_phone').nullable();
    table.string('guest_company').nullable();

    // Status Tracking
    table.enu('status', ['pending', 'confirmed', 'cancelled'])
      .defaultTo('confirmed');

    // Timestamps
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('reservations');
};