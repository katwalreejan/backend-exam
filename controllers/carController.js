const Car = require("../models/Car");
const mongoose = require("mongoose");

// GET /users
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({}).sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
};

// POST /users
const createCar = async (req, res) => {
  try {
    const newCar = await Car.create({ ...req.body });
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: "Failed to create car", error: error.message });
  }
};

// GET /users/:userId
const getCarById = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const car = await User.findById(carId);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

// PUT /users/:userId
const updateCar = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const updatedCar = await Car.findOneAndUpdate(
      { _id: carId },
      { ...req.body },
      { new: true }
    );
    if (updatedCar) {
      res.status(200).json(updatedCar);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update car" });
  }
};

// DELETE /users/:userId
const deleteCar = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const deletedCar = await Car.findOneAndDelete({ _id: carId });
    if (deletedCar) {
      res.status(200).json({ message: "Car deleted successfully" });
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete car" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};