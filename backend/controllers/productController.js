const ProductRequirement = require("../models/ProductRequirement");

exports.createRequirement = async (req, res) => {
  try {
    const data = await ProductRequirement.create(req.body);
    res.status(201).json({
      success: true,
      message: "Requirement submitted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
