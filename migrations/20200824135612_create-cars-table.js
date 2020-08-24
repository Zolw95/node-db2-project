exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    // ID
    table.increments("id").notNull().unique().primary();

    // VIN
    table.text("vin", 17).notNull().unique();

    // Model - Text
    table.text("model", 60).notNull();

    // Mileage - Integer
    table.integer("mileage", 8).notNull();

    // Mileage - Integer
    table.integer("year", 4).notNull();

    // Make - String/Text
    table.text("make", 30).notNull();

    // Transmission type - not unique
    table.text("transmission_type");

    // Title Status (clean/salvage) - not unique
    table.text("title_status");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
