import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  alount: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export { Transaction };
