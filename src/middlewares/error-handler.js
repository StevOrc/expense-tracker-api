import CustomError from "../errors/CustomError.js";

export default function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    return res.status(err.codeStatus).send(err.serializeError());
  }
  if (err instanceof Error) {
    return res.status(400).send({ message: err.message });
  }

  next();
}
