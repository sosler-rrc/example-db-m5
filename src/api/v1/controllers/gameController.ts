import { Controller, Delete, Get, Param, Req, Res } from "routing-controllers";
import { successResponse } from "../models/responseModel";
import * as GameService from "../services/gameService";
import { Request, Response } from "express";

@Controller()
export class GameCollectionController {
  @Get("/games")
  async getAll(@Req() req: Request, @Res() res: Response) {
    try {
      const games = await GameService.fetchAllGames();
      return res.status(200).json(successResponse(games, "Games retrieved successfully"));
    } catch (error) {
      throw error;
    }
  }

  @Get("/gameTypes")
  async getTypes(@Req() req: Request, @Res() res: Response) {
    try {
      const games = await GameService.fetchAllGameTypes();
      return res.status(200).json(successResponse(games, "Game types retrieved successfully"));
    } catch (error) {
      throw error;
    }
  }

  @Delete("/games/:id")
  async delete(@Param("id") id: string, @Req() req: Request, @Res() res: Response) {
    try {
      await GameService.deleteGame(id);
      return res.status(200).json(successResponse("Game deleted successfully"));
    } catch (error) {
      throw error;
    }
  }
}
