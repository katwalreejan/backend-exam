const express = require('express');
const router = express.Router();
// const auth = require("../middleware/auth");


const {
    getAllCars,
    createCar,
    getCarById,
    updateCar,
    deleteCar
} = require('../controllers/carController');
 
router.get('/', getAllCars);
// router.use(auth);
router.post("/", createCar);
router.get("/:carId", getCarById);
router.put("/:carId", updateCar);
router.delete("/:carId", deleteCar);

module.exports = router;