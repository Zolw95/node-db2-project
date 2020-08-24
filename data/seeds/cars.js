exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: 1,
          make: "toyota",
          model: "corolla",
          mileage: 0,
          transmission_type: "automatic",
          title_status: "clean",
          year: 2003,
        },
        {
          vin: 2,
          make: "honda",
          model: "accord sport",
          mileage: 80500,
          transmission_type: "automatic",
          title_status: "clean",
          year: 2013,
        },
        {
          vin: 3,
          make: "acura",
          model: "mdx",
          mileage: 18000,
          transmission_type: "automatic",
          title_status: "clean",
          year: 2019,
        },
        {
          vin: 4,
          make: "toyota",
          model: "celica ",
          mileage: 20004,
          transmission_type: "automatic",
          title_status: "clean",
          year: 2000,
        },
      ]);
    });
};
