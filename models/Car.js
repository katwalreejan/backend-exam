
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number
    },
    price: {
      type: Number,
    },
     isAvailable: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);