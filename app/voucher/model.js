const mongoose = require("mongoose");

const voucherSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nama harus di isi"],
  },
  status: {
    type: String,
    enum: ["Y", "N"],
    default: "Y",
  },
  thumbnail: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "Category",
  },
  nominals: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Nominal",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: "User",
  },
},{ timestamps: true });

module.exports = mongoose.model("Voucher", voucherSchema);
