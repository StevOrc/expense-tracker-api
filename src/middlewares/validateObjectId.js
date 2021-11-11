import mongoose from "mongoose";
import BadObjectOIdError from "../errors/BadObjectIdError.js";

const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id))
    throw new BadObjectOIdError(`${id} is not a valid mongoose id...`);

  next();
};

export { validateObjectId };
