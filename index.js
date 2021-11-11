import mongosse from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "src/config/config.env" });
const PORT = process.env.PORT || 3001;

const start = async () => {
  await mongosse.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("Connected to mongodb...", `${process.env.MONGO_URI}`);

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
};

start();
