exports.up = function(knex) {
  return knex.schema.createTable('rooms', (table) => {
    // Primary Key
    table.increments('id').primary();
    
    // Room Identification
    table.string('name').notNullable().unique();
    table.string('description').nullable();
    
    // Availability
    table.boolean('is_active').defaultTo(true);
    table.string('timezone').defaultTo('Asia/Bangkok').notNullable();
    
    // Capacity
    table.integer('capacity').unsigned().nullable();
    
    // Equipment List (Stored as JSON array)
    table.jsonb('equipment').defaultTo(JSON.stringify([
      // Default starter equipment
      { name: 'whiteboard', quantity: 1 },
    ]));
    
    // Timestamps
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rooms');
};