import express from "express";
import { Transaction } from "../models/transaction.model.js";
import NotFoundError from "../errors/NotFoundError.js";
import { validateObjectId } from "../middlewares/validateObjectId.js";

const router = express.Router();

/**
 * @Get all
 */
router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  return res.status(200).send(transactions);
});

/**
 * @Get transaction by ID
 */
router.get("/:id", validateObjectId, async (req, res) => {
  const { id } = req.params;
  const transaction = await Transaction.findById(id);
  if (!transaction) throw new NotFoundError(`Transaction not found with the given id : ${id}`);
  return res.status(200).send(transaction);
});

export { router as transactionRouter };
