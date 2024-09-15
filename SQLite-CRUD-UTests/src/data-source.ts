import { DataSource } from "typeorm";
import { Game } from "./entity/Game";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Game],
});
