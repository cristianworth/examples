import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Game } from "../entity/Game";

export class GameController {
  private gameRepository = AppDataSource.getRepository(Game);

  async create(req: Request, res: Response) {
    const game = this.gameRepository.create(req.body);
    await this.gameRepository.save(game);
    return res.status(201).json(game);
  }

  async findById(req: Request, res: Response) {
    const game = await this.gameRepository.findOneBy({ id: Number(req.params.id) });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    return res.json(game);
  }

  async findAll(req: Request, res: Response) {
    const games = await this.gameRepository.find();
    return res.json(games);
  }

  async update(req: Request, res: Response) {
    const game = await this.gameRepository.findOneBy({ id: Number(req.params.id) });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    Object.assign(game, req.body);
    await this.gameRepository.save(game);
    return res.json(game);
  }

  async delete(req: Request, res: Response) {
    const game = await this.gameRepository.findOneBy({ id: Number(req.params.id) });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    await this.gameRepository.remove(game);
    return res.status(204).send();
  }
}
