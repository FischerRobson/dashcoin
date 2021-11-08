import { Request, Response } from "express";
import { ListCriptosService } from "../services/ListCritposService";

export class ListCriptosController {
  async handle(req: Request, res: Response) {
    const listCriptosService = new ListCriptosService();

    const criptos = await listCriptosService.execute();

    return res.json(criptos);
  }
}