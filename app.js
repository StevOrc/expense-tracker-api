import express from "express";
import "express-async-errors";
import cors from "cors";
import errorHandler from "./src/middlewares/error-handler.js";
import { transactionRouter } from "./src/routes/transaction.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/transactions", transactionRouter);

app.use("*", () => {
  throw new Error("Route not found...");
});

app.use(errorHandler);

export default app;
