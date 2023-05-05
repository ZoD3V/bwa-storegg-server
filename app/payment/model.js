const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      require: [true, "Type harus di isi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    banks: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Bank",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
