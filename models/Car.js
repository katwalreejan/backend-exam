
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trim :true
    },
    year: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      min: 0
    },
     isAvailable: {
      type: Boolean,
      default: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);