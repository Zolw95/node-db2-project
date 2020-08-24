const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig");
module.exports = router;

router.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await db("cars");
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/vehicles/:id", async (req, res) => {
  try {
    const vehicleById = await db("cars").where("id", req.params.id).first();

    res.status(200).json(vehicleById);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/vehicles", async (req, res) => {
  if (
    !req.body.vin ||
    !req.body.make ||
    !req.body.mileage ||
    !req.body.model ||
    !req.body.year
  ) {
    res
      .status(400)
      .json({ msg: "VIN, Make, Model, Mileage and Year and required fields" });
  }
  try {
    const newVehicle = await db("cars").insert({
      vin: req.body.vin,
      make: req.body.make,
      mileage: req.body.mileage,
      model: req.body.model,
      year: req.body.year,
    });

    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.delete("/vehicles/:id", async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ msg: "Missing ID of Vehicle" });
  }

  try {
    const removedVehicle = await db("cars").where("id", req.params.id).del();

    res.status(200).json(`${removedVehicle} Vehicle Removed`);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.put("/vehicles/:id", async (req, res) => {
  if (
    !req.body.vin ||
    !req.body.make ||
    !req.body.mileage ||
    !req.body.model ||
    !req.body.year
  ) {
    res
      .status(400)
      .json({ msg: "VIN, Make, Model, Mileage and Year and required fields" });
  }
  try {
    const updatedVehicle = await db("cars")
      .where("id", req.params.id)
      .update(req.body);

    res.status(200).json({ msg: updatedVehicle + " Vehicle Updated" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});
