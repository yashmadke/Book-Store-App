import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.get("/", (request, response) => {
  return response.status(234).send("This is MERN Project.");
});

app.use("/books", booksRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("App is connected to database");

    app.listen(PORT, () => {
      console.log(`App listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
