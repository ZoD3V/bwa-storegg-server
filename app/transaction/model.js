const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    historyVoucherTopup: {
      gameName: { type: String, require: [true, "Nama game harus di isi"] },
      category: { type: String, require: [true, "category harus di isi"] },
      thumbnail: { type: String },
      coinName: { type: String, require: [true, "Nama koin harus di isi"] },
      coinQuantity: {
        type: String,
        require: [true, "Jumlah koin harus di isi"],
      },
      price: { type: Number },
    },
    hitoryPayment: {
      name: { type: String, require: [true, "Nama harus di isi"] },
      type: { type: String, require: [true, "Type harus di isi"] },
      bankName: { type: String, require: [true, "Nama bank harus di isi"] },
      noRekening: { type: String, require: [true, "No rekening harus di isi"] },
    },
    name: {
      type: String,
      require: [true, "Nama harus di isi"],
      maxLength: [225, "Panjang nama harus antara 3 - 225"],
      minLength: [3, "Panjang nama harus antara 3 - 225"],
    },
    accountUser: {
      type: String,
      require: [true, "Nama akun harus di isi"],
      maxLength: [225, "Panjang nama harus antara 3 - 225"],
      minLength: [3, "Panjang nama harus antara 3 - 225"],
    },
    tax: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "Player",
    },
    historyUser: {
      name: { type: String, require: [true, "Nama player harus di isi"] },
      phoneNumber: {
        type: String,
        require: [true, "No telepon harus di isi"],
        maxLength: [13, "Panjang nama harus antara 9 - 13"],
        minLength: [9, "Panjang nama harus antara 9 - 13"],
      },
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
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

module.exports = mongoose.model("Transaction", transactionSchema);
