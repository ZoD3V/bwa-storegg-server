const mongoose = require("mongoose");

const backSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama harus di isi"],
    },
    bankName: {
      type: String,
      require: [true, "Nama bank harus di isi"],
    },
    noRekening: {
      type: String,
      require: [true, "No rekening harus di isi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", backSchema);
