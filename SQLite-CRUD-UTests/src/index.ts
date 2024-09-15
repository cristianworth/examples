import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { GameController } from "./controller/GameController";

const app = express();
const port = 3000;

app.use(express.json());

const gameController = new GameController();

app.post("/games", gameController.create);
app.get("/games/:id", gameController.findById);
app.get("/games", gameController.findAll);
app.put("/games/:id", gameController.update);
app.delete("/games/:id", gameController.delete);

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
