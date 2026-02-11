const mongoose = require("mongoose");

const productRequirementSchema = new mongoose.Schema(
  {
    productName: String,
    height: String,
    width: String,
    holes: String,
    parts: String,

    partyName: { type: String, required: true },
    partyNumber: { type: String, required: true },
    qty: { type: Number, required: true },
    requirementDetails: String,
    requiredDays: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ProductRequirement",
  productRequirementSchema
);
