const mongoose = require("mongoose");

const bcryt = require("bcryptjs");

const HASH_ROUND = 10;

const playerSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email harus di isi"],
    },
    name: {
      type: String,
      require: [true, "Name harus di isi"],
      maxLength: [225, "Panjang nama harus antara 3 - 225"],
      minLength: [3, "Panjang nama harus antara 3 - 225"],
    },
    username: {
      type: String,
      require: [true, "Name harus di isi"],
      maxLength: [225, "Panjang username harus antara 3 - 225"],
      minLength: [3, "Panjang username harus antara 3 - 225"],
    },
    password: {
      type: String,
      require: [true, "Kata sandi harus di isi"],
      maxLength: [225, "Panjang password max 225"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: String,
      require: [true, "Nomor telepon harus di isi"],
      maxLength: [13, "Panjang username harus antara 9 - 13"],
      minLength: [9, "Panjang username harus antara  9 - 13"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    favorite: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);
playerSchema.path("email").validate(
  async function (value) {
    try {
      const count = await this.model("Player").countDocuments({ email: value });
      return !count;
    } catch (error) {
      throw error;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

playerSchema.pre("save", function (next) {
  this.password = bcryt.hashSync(this.password, HASH_ROUND);
  next();
});

module.exports = mongoose.model("Player", playerSchema);
